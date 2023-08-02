import { queryField, list } from 'nexus'

export const PromocodesAggregateQuery = queryField('aggregatePromocodes', {
  type: 'AggregatePromocodes',
  args: {
    where: 'PromocodesWhereInput',
    orderBy: list('PromocodesOrderByWithRelationInput'),
    cursor: 'PromocodesWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.promocodes.aggregate({ ...args, ...select }) as any
  },
})
