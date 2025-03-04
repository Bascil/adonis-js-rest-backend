import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(2),
    lastName: vine.string().trim().minLength(2),
    email: vine.string().trim().email(),
    phoneNumber: vine.string().trim(),
    address: vine.string().trim().optional(),
    password: vine.string().minLength(8),
    active: vine.boolean().optional(),
    roleId: vine.number().positive(),
  })
)

/**
 * Validates the user's update action
 */
export const updateUserValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(2).optional(),
    lastName: vine.string().trim().minLength(2).optional(),
    email: vine.string().trim().email().optional(),
    phoneNumber: vine.string().trim().optional(),
    address: vine.string().trim().optional(),
    password: vine.string().minLength(8).optional(),
    active: vine.boolean().optional(),
    roleId: vine.number().positive().optional(),
  })
)
