import { mutationField, nonNull } from 'nexus'

export const BaseSettingsDeleteManyMutation = mutationField(
  'deleteManyBaseSettings',
  {
    type: nonNull('BatchPayload'),

    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.baseSettings.deleteMany({ where } as any)
    },
  },
)
