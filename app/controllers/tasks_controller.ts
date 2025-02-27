import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  public async getTasks({}: HttpContext) {
    return { message: 'get tasks' }
  }
  public async getTask({}: HttpContext) {
    return { message: 'get task' }
  }

  public async createTask({}: HttpContext) {
    return { message: 'create task' }
  }

  public async updateTask({}: HttpContext) {
    return { message: 'update task' }
  }

  public async deleteTask({}: HttpContext) {
    return { message: 'delete task' }
  }
}
