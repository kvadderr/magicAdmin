import { mutationField, nonNull } from 'nexus'

export const ContactsCreateOneMutation = mutationField('createOneContacts', {
  type: nonNull('Contacts'),
  args: {
    data: nonNull('ContactsCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.contacts.create({
      data,
      ...select,
    })
  },
})
