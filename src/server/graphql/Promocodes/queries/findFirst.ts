import { queryField, list } from 'nexus'

export const PromocodesFindFirstQuery = queryField('findFirstPromocodes', {
  type: 'Promocodes',
  args: {
    where: 'PromocodesWhereInput',
    orderBy: list('PromocodesOrderByWithRelationInput'),
    cursor: 'PromocodesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PromocodesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.promocodes.findFirst({
      ...args,
      ...select,
    })
  },
})
