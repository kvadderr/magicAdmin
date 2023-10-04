import { mutationField, nonNull } from 'nexus'

export const UrlSettingsDeleteManyMutation = mutationField(
  'deleteManyUrlSettings',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'UrlSettingsWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.urlSettings.deleteMany({ where } as any)
    },
  },
)
