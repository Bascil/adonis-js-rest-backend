import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    // Or create users with specific attributes
    await UserFactory.merge([
      {
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
      },
    ]).create()

    // Create 10 random users
    await UserFactory.createMany(10)
  }
}
