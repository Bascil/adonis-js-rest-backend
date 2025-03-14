import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'
import { createTaskValidator } from '#validators/task'
import { formatValidationError } from '#utils/validation'
import { errors } from '@vinejs/vine'
import PaginationTrait from '#traits/pagination_trait'

export default class TasksController extends PaginationTrait {
  public async getTasks({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)

    const tasks = await Task.query().orderBy('id', 'desc').paginate(page, perPage)
    return response.ok(this.transform(tasks.serialize()))
  }
  public async getTask({ params, response }: HttpContext) {
    const id = params.id
    const task = await Task.find(id)
    if (!task) {
      return response.notFound({ message: `task with id ${id} not found` })
    }

    return response.ok(task)
  }

  public async createTask({ request, response }: HttpContext) {
    try {
      const data = await request.all()
      const payload = await createTaskValidator.validate(data)

      //@ts-ignore
      const task = await Task.create(payload)

      return response.created({
        message: 'Task created successfully',
        task,
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

  public async updateTask({}: HttpContext) {
    return { message: 'update task' }
  }

  public async deleteTask({}: HttpContext) {
    return { message: 'delete task' }
  }
}
