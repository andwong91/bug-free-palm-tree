import vine from '@vinejs/vine';

export const updateSnapshotPolicyValidator = vine.compile(
  vine.object({
    directoryPath: vine.string().trim(),
    deletionTimeframe: vine.enum(['never', 'automatically']),
    deletionFrequency: vine.object({
      value: vine.number().min(1).max(99),
      duration: vine.enum(['never', 'days', 'weeks', 'months']),
    }),
    policyIsEnabled: vine.boolean(),
    policyName: vine.string().trim(),
    scheduleType: vine.enum(['daily', 'weekly']),
    snapshotsAreLocked: vine.boolean(),
    snapshotHour: vine.number().min(0).max(23),
    snapshotMinute: vine.number().min(0).max(59),
    selectedDays: vine.array(vine.boolean()).minLength(8).maxLength(8),
  }),
);
