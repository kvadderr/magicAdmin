import { mutationField, nonNull } from 'nexus'

export const UrlSettingsUpsertOneMutation = mutationField(
  'upsertOneUrlSettings',
  {
    type: nonNull('UrlSettings'),
    args: {
      where: nonNull('UrlSettingsWhereUniqueInput'),
      create: nonNull('UrlSettingsCreateInput'),
      update: nonNull('UrlSettingsUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.urlSettings.upsert({
        ...args,
        ...select,
      })
    },
  },
)
