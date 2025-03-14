/**
|--------------------------------------------------------------------------
| Auth Validators
|--------------------------------------------------------------------------
|
| This file contains the validators for authentication operations.
|
*/
import vine from '@vinejs/vine'

/**
 * Validator for login payload
 */
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)

/**
 * Validator for registration payload
 */
export const registerValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)
