import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import { formatValidationError } from '#utils/validation'
import { errors } from '@vinejs/vine'

export default class AuthController {
  public async login({ request, response, auth }: HttpContext) {
    try {
      const data = request.all()
      const payload = await loginValidator.validate(data)

      const { email, password } = payload
      const user = await User.verifyCredentials(email, password)

      // Generate token and extract only the token string
      const { token } = (await auth.use('jwt').generate(user)) as { token: string }
      return response.ok({ data: { token, user } })
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return response.unprocessableEntity(formatValidationError(error))
      }

      return response.unauthorized({
        message: 'Invalid credentials',
        error: error.message,
      })
    }
  }

  public async register({ request, response, auth }: HttpContext) {
    try {
      const data = request.all()
      const payload = await registerValidator.validate(data)

      // Check if user already exists
      const existingUser = await User.findBy('email', payload.email)
      if (existingUser) {
        return response.conflict({
          message: 'User with this email already exists',
        })
      }

      // Create user
      const user = await User.create(payload)

      // Generate token
      const token = await auth.use('jwt')

      return response.created({
        message: 'User registered successfully',
        token,
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
}
