import { queryField, list } from 'nexus'

export const UrlSettingsFindFirstQuery = queryField('findFirstUrlSettings', {
  type: 'urlSettings',

  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
