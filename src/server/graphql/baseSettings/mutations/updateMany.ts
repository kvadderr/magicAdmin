import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpdateManyMutation = mutationField(
  'updateManyBaseSettings',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('BaseSettingsUpdateManyMutationInput'),
      where: 'BaseSettingsWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.baseSettings.updateMany(args as any)
    },
  },
)
