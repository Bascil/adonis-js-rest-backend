import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import { formatValidationError } from '#utils/validation'
import vine, { errors } from '@vinejs/vine'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  public async getUsers({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }
  public async getUser({ params, response }: HttpContext) {
    const id = params.id
    const user = await User.find(id)
    if (!user) {
      return response.notFound({ message: `user with id ${id} not found` })
    }

    return response.ok(user)
  }

  public async createUser({ request, response }: HttpContext) {
    try {
      const data = await request.all()
      const payload = await createUserValidator.validate(data)

      const password = await hash.make(payload.password)
      const user = await User.create({ ...payload, password })

      return response.created({
        message: 'User created successfully',
        user,
      })
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return response.unprocessableEntity(formatValidationError(error))
      }

      return response.internalServerError({
        error: error.message,
      })
    }
  }

  public async updateUser({}: HttpContext) {
    return { message: 'update user' }
  }

  public async deleteUser({}: HttpContext) {
    return { message: 'delete user' }
  }
}
