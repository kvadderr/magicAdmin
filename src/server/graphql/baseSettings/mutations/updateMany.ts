import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpdateManyMutation = mutationField(
  'updateManyBaseSettings',
  {
    type: nonNull('BatchPayload'),

    resolve(_parent, args, { prisma }) {
      return prisma.baseSettings.updateMany(args as any)
    },
  },
)
