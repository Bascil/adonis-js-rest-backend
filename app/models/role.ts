import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description?: string

  @column({
    prepare: (value: string[] | object) => {
      if (typeof value === 'string') {
        // Try to parse as JSON if it's already a string
        try {
          JSON.parse(value)
          return value // It's already JSON formatted
        } catch (e) {
          // It's a plain string, so convert to JSON array
          return JSON.stringify([value])
        }
      }
      return JSON.stringify(value)
    },
    consume: (value: string) => {
      try {
        return JSON.parse(value)
      } catch (e) {
        // If parsing fails, return as a single-item array
        return [value]
      }
    },
  })
  declare permissions: string[]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
