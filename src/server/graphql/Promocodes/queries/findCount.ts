import { queryField, nonNull, list } from 'nexus'

export const PromocodesFindCountQuery = queryField('findManyPromocodesCount', {
  type: nonNull('Int'),
  args: {
    where: 'PromocodesWhereInput',
    orderBy: list('PromocodesOrderByWithRelationInput'),
    cursor: 'PromocodesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PromocodesScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.promocodes.count(args as any)
  },
})
