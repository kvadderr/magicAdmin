import { queryField, list } from 'nexus'

export const UrlSettingsFindFirstQuery = queryField('findFirstUrlSettings', {
  type: 'UrlSettings',
  args: {
    where: 'UrlSettingsWhereInput',
    orderBy: list('UrlSettingsOrderByWithRelationInput'),
    cursor: 'UrlSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UrlSettingsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
