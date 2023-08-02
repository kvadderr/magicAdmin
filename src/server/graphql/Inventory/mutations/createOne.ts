import { mutationField, nonNull } from 'nexus'

export const InventoryCreateOneMutation = mutationField('createOneInventory', {
  type: nonNull('Inventory'),
  args: {
    data: nonNull('InventoryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.inventory.create({
      data,
      ...select,
    })
  },
})
