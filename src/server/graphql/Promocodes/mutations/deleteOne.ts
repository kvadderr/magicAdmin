import { mutationField, nonNull } from 'nexus'

export const PromocodesDeleteOneMutation = mutationField(
  'deleteOnePromocodes',
  {
    type: 'Promocodes',
    args: {
      where: nonNull('PromocodesWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.promocodes.delete({
        where,
        ...select,
      })
    },
  },
)
