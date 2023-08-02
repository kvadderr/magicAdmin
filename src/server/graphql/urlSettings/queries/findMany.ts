import { queryField, nonNull, list } from 'nexus'

export const UrlSettingsFindManyQuery = queryField('findManyUrlSettings', {
  type: nonNull(list(nonNull('urlSettings'))),

  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.findMany({
      ...args,
      ...select,
    })
  },
})
