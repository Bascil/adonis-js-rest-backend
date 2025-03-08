import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'name' })
  declare name: string

  @column({ columnName: 'description' })
  declare description: string

  @column({ columnName: 'due_date' })
  declare dueDate?: DateTime

  @column({ columnName: 'project_id' })
  declare projectId: number

  @column({ columnName: 'user_id' })
  declare userId: number

  @column({ columnName: 'status' })
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
