import { queryField, list } from 'nexus'

export const BaseSettingsFindFirstQuery = queryField('findFirstBaseSettings', {
  type: 'baseSettings',

  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
