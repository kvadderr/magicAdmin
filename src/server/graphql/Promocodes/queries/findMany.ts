import { queryField, nonNull, list } from 'nexus'

export const PromocodesFindManyQuery = queryField('findManyPromocodes', {
  type: nonNull(list(nonNull('Promocodes'))),
  args: {
    where: 'PromocodesWhereInput',
    orderBy: list('PromocodesOrderByWithRelationInput'),
    cursor: 'PromocodesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PromocodesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.promocodes.findMany({
      ...args,
      ...select,
    })
  },
})
