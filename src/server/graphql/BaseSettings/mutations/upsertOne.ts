import { mutationField, nonNull } from 'nexus'

export const BaseSettingsUpsertOneMutation = mutationField(
  'upsertOneBaseSettings',
  {
    type: nonNull('BaseSettings'),
    args: {
      where: nonNull('BaseSettingsWhereUniqueInput'),
      create: nonNull('BaseSettingsCreateInput'),
      update: nonNull('BaseSettingsUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.baseSettings.upsert({
        ...args,
        ...select,
      })
    },
  },
)
