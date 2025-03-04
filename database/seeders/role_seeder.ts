import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      {
        name: 'admin',
        description: 'Admin role',
        permissions: [
          'manage.system',
          'manage.projects',
          'manage.users',
          'manage.tasks',
          'manage.customers',
        ],
      },
      {
        name: 'manager',
        description: 'Manager role',
        permissions: ['manage.projects', 'manage.users', 'manage.tasks', 'manage.customers'],
      },
      {
        name: 'user',
        description: 'User role',
        permissions: ['manage.tasks', 'view.projects', 'view.tasks'],
      },
    ])
  }
}
