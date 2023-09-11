import { mutationField, nonNull } from 'nexus'

export const ContactsDeleteOneMutation = mutationField('deleteOneContacts', {
  type: 'Contacts',
  args: {
    where: nonNull('ContactsWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.contacts.delete({
      where,
      ...select,
    })
  },
})
