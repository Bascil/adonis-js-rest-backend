import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        phoneNumber: '+254712345678',
        address: 'Nairobi, Kenya',
        password: 'password123',
        roleId: 1,
      },
      {
        firstName: 'Manager',
        lastName: 'User',
        email: 'manager@example.com',
        phoneNumber: '+254712345675',
        password: 'password123',
        roleId: 2,
      },
      {
        firstName: 'User',
        lastName: 'User',
        email: 'user@example.com',
        phoneNumber: '+254712345676',
        password: 'password123',
        roleId: 3,
      },
    ])

    // await UserFactory.createMany(10000)
  }
}
