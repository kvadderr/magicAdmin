import { queryField, list } from 'nexus'

export const TokenFindFirstQuery = queryField('findFirstToken', {
  type: 'Token',
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByWithRelationInput'),
    cursor: 'TokenWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TokenScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.findFirst({
      ...args,
      ...select,
    })
  },
})
