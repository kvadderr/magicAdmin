import { queryField, nonNull, list } from 'nexus'

export const BaseSettingsFindManyQuery = queryField('findManyBaseSettings', {
  type: nonNull(list(nonNull('baseSettings'))),

  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.findMany({
      ...args,
      ...select,
    })
  },
})
