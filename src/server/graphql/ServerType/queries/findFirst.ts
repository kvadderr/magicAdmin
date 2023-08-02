import { queryField, list } from 'nexus'

export const ServerTypeFindFirstQuery = queryField('findFirstServerType', {
  type: 'ServerType',
  args: {
    where: 'ServerTypeWhereInput',
    orderBy: list('ServerTypeOrderByWithRelationInput'),
    cursor: 'ServerTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serverType.findFirst({
      ...args,
      ...select,
    })
  },
})
