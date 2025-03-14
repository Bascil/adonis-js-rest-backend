import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createTaskValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2),
    description: vine.string().trim().minLength(2),
    dueDate: vine.date().optional(),
    projectId: vine.number().positive(),
    userId: vine.number().positive(),
  })
)

/**
 * Validates the user's update action
 */
export const updateTaskValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).optional(),
    description: vine.string().trim().minLength(2).optional(),
    dueDate: vine.date().optional(),
    projectId: vine.number().positive().optional(),
    userId: vine.number().positive().optional(),
  })
)
