import { mutationField, nonNull } from 'nexus'

export const ContactsUpdateOneMutation = mutationField('updateOneContacts', {
  type: nonNull('Contacts'),
  args: {
    data: nonNull('ContactsUpdateInput'),
    where: nonNull('ContactsWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.contacts.update({
      where,
      data,
      ...select,
    })
  },
})
