import { mutationField, nonNull } from 'nexus'

export const PromocodesCreateOneMutation = mutationField(
  'createOnePromocodes',
  {
    type: nonNull('Promocodes'),
    args: {
      data: nonNull('PromocodesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.promocodes.create({
        data,
        ...select,
      })
    },
  },
)
