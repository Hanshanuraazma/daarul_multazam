export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const registrationDataset = assertValue(
  process.env.SANITY_REGISTRATION_DATASET,
  'Missing environment variable: SANITY_REGISTRATION_DATASET'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.warn(errorMessage)
    // Return dummy value to allow build to pass during UI development
    return 'dummy-value' as unknown as T
  }
  return v
}
