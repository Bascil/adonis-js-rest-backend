import { defineConfig } from '@adonisjs/auth'
import { InferAuthEvents, Authenticators } from '@adonisjs/auth/types'
import { sessionUserProvider } from '@adonisjs/auth/session'
import { jwtGuard } from '@maximemrf/adonisjs-jwt/jwt_config'
import { JwtGuardUser, BaseJwtContent } from '@maximemrf/adonisjs-jwt/types'
import User from '#models/user'

interface JwtContent extends BaseJwtContent {
  email: string
}

const authConfig = defineConfig({
  // define the default authenticator to jwt
  default: 'jwt',
  guards: {
    // add the jwt guard
    jwt: jwtGuard({
      // tokenExpiresIn can be a string or a number, it can be optional
      tokenExpiresIn: '1h',
      // if you want to use cookies for the authentication instead of the bearer token (optional)
      useCookies: false,
      provider: sessionUserProvider({
        model: () => import('#models/user'),
      }),
      // content is a function that takes the user and returns the content of the token, it can be optional, by default it returns only the user id
      content: <T>(user: JwtGuardUser<T>): JwtContent => {
        return {
          userId: user.getId(),
          email: (user.getOriginal() as User).email,
        }
      },
    }),
  },
})

export default authConfig

/**
 * Inferring types from the configured auth
 * guards.
 */
declare module '@adonisjs/auth/types' {
  interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}
declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}
