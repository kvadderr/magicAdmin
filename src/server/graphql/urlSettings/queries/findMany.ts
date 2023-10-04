import { queryField, nonNull, list } from 'nexus'

export const UrlSettingsFindManyQuery = queryField('findManyUrlSettings', {
  type: nonNull(list(nonNull('UrlSettings'))),
  args: {
    where: 'UrlSettingsWhereInput',
    orderBy: list('UrlSettingsOrderByWithRelationInput'),
    cursor: 'UrlSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UrlSettingsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.findMany({
      ...args,
      ...select,
    })
  },
})
