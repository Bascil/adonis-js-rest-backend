import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, computed } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare phoneNumber: string

  @column()
  declare address?: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare active: boolean

  @column()
  declare roleId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  /**
   * Hash the password before saving
   */
  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }

  /**
   * Verify user credentials
   */
  static async verifyCredentials(email: string, password: string) {
    const user = await this.findByOrFail('email', email)

    if (!(await hash.verify(user.password, password))) {
      throw new Error('Invalid credentials')
    }

    return user
  }

  /**
   * Generate authentication token
   */
  async generateToken(auth: Authenticator<Authenticators>) {
    const { token } = (await auth.use('jwt').generate(this)) as { token: string }
    return token
  }
}
