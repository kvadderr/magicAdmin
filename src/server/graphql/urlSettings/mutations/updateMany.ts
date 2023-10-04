import { mutationField, nonNull } from 'nexus'

export const UrlSettingsUpdateManyMutation = mutationField(
  'updateManyUrlSettings',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('UrlSettingsUpdateManyMutationInput'),
      where: 'UrlSettingsWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.urlSettings.updateMany(args as any)
    },
  },
)
