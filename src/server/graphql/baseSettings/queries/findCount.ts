import { queryField, nonNull, list } from 'nexus'

export const BaseSettingsFindCountQuery = queryField(
  'findManyBaseSettingsCount',
  {
    type: nonNull('Int'),

    resolve(_parent, args, { prisma }) {
      return prisma.baseSettings.count(args as any)
    },
  },
)
