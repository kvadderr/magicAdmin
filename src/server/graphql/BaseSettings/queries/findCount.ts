import { queryField, nonNull, list } from 'nexus'

export const BaseSettingsFindCountQuery = queryField(
  'findManyBaseSettingsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'BaseSettingsWhereInput',
      orderBy: list('BaseSettingsOrderByWithRelationInput'),
      cursor: 'BaseSettingsWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('BaseSettingsScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.baseSettings.count(args as any)
    },
  },
)
