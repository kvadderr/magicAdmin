import { queryField, nonNull, list } from 'nexus'

export const ServerTypeFindManyQuery = queryField('findManyServerType', {
  type: nonNull(list(nonNull('ServerType'))),
  args: {
    where: 'ServerTypeWhereInput',
    orderBy: list('ServerTypeOrderByWithRelationInput'),
    cursor: 'ServerTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serverType.findMany({
      ...args,
      ...select,
    })
  },
})
