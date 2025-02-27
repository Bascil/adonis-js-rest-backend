import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

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
      const data = await request.body()
      const user = await User.create(data)

      return response.created({
        message: 'User created successfully',
        user,
      })
    } catch (error) {
      return response.internalServerError({
        message: 'Failed to create user',
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
