import { queryField, nonNull } from 'nexus'

export const BaseSettingsFindUniqueQuery = queryField(
  'findUniqueBaseSettings',
  {
    type: 'baseSettings',

    resolve(_parent, { where }, { prisma, select }) {
      return prisma.baseSettings.findUnique({
        where,
        ...select,
      })
    },
  },
)
