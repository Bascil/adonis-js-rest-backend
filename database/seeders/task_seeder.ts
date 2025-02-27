import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

export default class extends BaseSeeder {
  async run() {
    await Task.createMany([
      {
        name: 'Wake up',
        description: 'Wake up early',
      },
      {
        name: 'Take a bus',
        description: 'Take a bus to go to school',
      },
      {
        name: 'Go to school',
        description: 'Go to school and study',
      },
    ])
  }
}
