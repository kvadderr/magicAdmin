import { queryField, nonNull } from 'nexus'

export const ServerTypeFindUniqueQuery = queryField('findUniqueServerType', {
  type: 'ServerType',
  args: {
    where: nonNull('ServerTypeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.serverType.findUnique({
      where,
      ...select,
    })
  },
})
