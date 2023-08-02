import { queryField, nonNull, list } from 'nexus'

export const TokenFindManyQuery = queryField('findManyToken', {
  type: nonNull(list(nonNull('Token'))),
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByWithRelationInput'),
    cursor: 'TokenWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TokenScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.findMany({
      ...args,
      ...select,
    })
  },
})
