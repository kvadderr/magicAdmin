import { queryField, nonNull } from 'nexus'

export const InventoryFindUniqueQuery = queryField('findUniqueInventory', {
  type: 'Inventory',
  args: {
    where: nonNull('InventoryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.inventory.findUnique({
      where,
      ...select,
    })
  },
})
