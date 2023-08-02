import { mutationField, nonNull } from 'nexus'

export const PromocodesUpdateOneMutation = mutationField(
  'updateOnePromocodes',
  {
    type: nonNull('Promocodes'),
    args: {
      data: nonNull('PromocodesUpdateInput'),
      where: nonNull('PromocodesWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.promocodes.update({
        where,
        data,
        ...select,
      })
    },
  },
)
