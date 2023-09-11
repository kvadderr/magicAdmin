import { queryField, nonNull, list } from 'nexus'

export const BaseSettingsFindManyQuery = queryField('findManyBaseSettings', {
  type: nonNull(list(nonNull('BaseSettings'))),
  args: {
    where: 'BaseSettingsWhereInput',
    orderBy: list('BaseSettingsOrderByWithRelationInput'),
    cursor: 'BaseSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('BaseSettingsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.findMany({
      ...args,
      ...select,
    })
  },
})
