import { defineType, defineField } from 'sanity'

export const registration = defineType({
  name: 'registration',
  title: 'Data PPDB',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Nama Lengkap',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'whatsapp',
      title: 'No. WhatsApp',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'address',
      title: 'Alamat',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'previousSchool',
      title: 'Asal Sekolah',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'targetLevel',
      title: 'Jenjang yang Dituju',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'additionalMessage',
      title: 'Pesan Tambahan',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status Pendaftaran',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'Pending' },
          { title: 'Diterima', value: 'Diterima' },
          { title: 'Ditolak', value: 'Ditolak' },
        ],
      },
      initialValue: 'Pending',
    }),
    defineField({
      name: 'registrationDate',
      title: 'Tanggal Daftar',
      type: 'datetime',
      readOnly: true,
    }),
  ],
})
