import { queryField, nonNull } from 'nexus'

export const BaseSettingsFindUniqueQuery = queryField(
  'findUniqueBaseSettings',
  {
    type: 'BaseSettings',
    args: {
      where: nonNull('BaseSettingsWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.baseSettings.findUnique({
        where,
        ...select,
      })
    },
  },
)
