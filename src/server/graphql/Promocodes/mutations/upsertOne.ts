import { mutationField, nonNull } from 'nexus'

export const PromocodesUpsertOneMutation = mutationField(
  'upsertOnePromocodes',
  {
    type: nonNull('Promocodes'),
    args: {
      where: nonNull('PromocodesWhereUniqueInput'),
      create: nonNull('PromocodesCreateInput'),
      update: nonNull('PromocodesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.promocodes.upsert({
        ...args,
        ...select,
      })
    },
  },
)
