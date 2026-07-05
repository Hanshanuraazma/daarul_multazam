import { createClient } from 'next-sanity'

import { apiVersion, registrationDataset, projectId } from '../env'

export const writeClient = createClient({
  projectId,
  dataset: registrationDataset,
  apiVersion,
  useCdn: false, // Don't use CDN for writes
  token: process.env.SANITY_API_WRITE_TOKEN,
})
