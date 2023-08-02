import { queryField, list } from 'nexus'

export const TokenAggregateQuery = queryField('aggregateToken', {
  type: 'AggregateToken',
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByWithRelationInput'),
    cursor: 'TokenWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.aggregate({ ...args, ...select }) as any
  },
})
