import { queryField, list } from 'nexus'

export const BaseSettingsFindFirstQuery = queryField('findFirstBaseSettings', {
  type: 'BaseSettings',
  args: {
    where: 'BaseSettingsWhereInput',
    orderBy: list('BaseSettingsOrderByWithRelationInput'),
    cursor: 'BaseSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('BaseSettingsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
