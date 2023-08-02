import { mutationField, nonNull } from 'nexus'

export const InventoryDeleteOneMutation = mutationField('deleteOneInventory', {
  type: 'Inventory',
  args: {
    where: nonNull('InventoryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.inventory.delete({
      where,
      ...select,
    })
  },
})
