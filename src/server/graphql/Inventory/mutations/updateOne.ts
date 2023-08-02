import { mutationField, nonNull } from 'nexus'

export const InventoryUpdateOneMutation = mutationField('updateOneInventory', {
  type: nonNull('Inventory'),
  args: {
    data: nonNull('InventoryUpdateInput'),
    where: nonNull('InventoryWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.inventory.update({
      where,
      data,
      ...select,
    })
  },
})
