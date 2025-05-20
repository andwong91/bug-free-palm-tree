import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class PolicySnapshot extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare directoryPath: string

  @column()
  declare deletionTimeframe: string

  @column()
  declare deletionValue: number

  @column()
  declare deletionDuration: string

  @column()
  declare policyName: string

  @column()
  declare scheduleType: string

  @column()
  declare snapshotsAreLocked: boolean

  @column()
  declare snapshotHour: number

  @column()
  declare snapshotMinute: number

  @column({
    prepare: (value: string) => {
      return JSON.parse(value);
    },
    consume: (value: boolean[]) => {
      return JSON.stringify(value);
    },
  })
  declare selectedDays: string
}