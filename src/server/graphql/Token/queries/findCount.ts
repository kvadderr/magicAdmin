import { queryField, nonNull, list } from 'nexus'

export const TokenFindCountQuery = queryField('findManyTokenCount', {
  type: nonNull('Int'),
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByWithRelationInput'),
    cursor: 'TokenWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TokenScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.token.count(args as any)
  },
})
