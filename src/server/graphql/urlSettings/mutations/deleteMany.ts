import { mutationField, nonNull } from 'nexus'

export const UrlSettingsDeleteManyMutation = mutationField(
  'deleteManyUrlSettings',
  {
    type: nonNull('BatchPayload'),

    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.urlSettings.deleteMany({ where } as any)
    },
  },
)
