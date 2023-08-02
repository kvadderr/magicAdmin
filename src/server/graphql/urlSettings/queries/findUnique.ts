import { queryField, nonNull } from 'nexus'

export const UrlSettingsFindUniqueQuery = queryField('findUniqueUrlSettings', {
  type: 'urlSettings',

  resolve(_parent, { where }, { prisma, select }) {
    return prisma.urlSettings.findUnique({
      where,
      ...select,
    })
  },
})
