import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

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
        password: await hash.make('password123'),
        roleId: 1,
      },
      {
        firstName: 'Manager',
        lastName: 'User',
        email: 'manager@example.com',
        phoneNumber: '+254712345675',
        password: await hash.make('password456'),
        roleId: 2,
      },
      {
        firstName: 'User',
        lastName: 'User',
        email: 'user@example.com',
        phoneNumber: '+254712345676',
        password: await hash.make('password789'),
        roleId: 3,
      },
    ])

    // declare updatedAt: DateTime
    // Create 10 random users
    //await UserFactory.createMany(10)
  }
}
