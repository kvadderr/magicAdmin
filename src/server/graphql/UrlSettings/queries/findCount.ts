import { queryField, nonNull, list } from 'nexus'

export const UrlSettingsFindCountQuery = queryField(
  'findManyUrlSettingsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'UrlSettingsWhereInput',
      orderBy: list('UrlSettingsOrderByWithRelationInput'),
      cursor: 'UrlSettingsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('UrlSettingsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.urlSettings.count(args as any)
    },
  },
)
