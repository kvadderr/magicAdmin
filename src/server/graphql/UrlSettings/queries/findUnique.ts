import { queryField, nonNull } from 'nexus'

export const UrlSettingsFindUniqueQuery = queryField('findUniqueUrlSettings', {
  type: 'UrlSettings',
  args: {
    where: nonNull('UrlSettingsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.urlSettings.findUnique({
      where,
      ...select,
    })
  },
})
