import { queryField, nonNull, list } from 'nexus'

export const UrlSettingsFindCountQuery = queryField(
  'findManyUrlSettingsCount',
  {
    type: nonNull('Int'),

    resolve(_parent, args, { prisma }) {
      return prisma.urlSettings.count(args as any)
    },
  },
)
