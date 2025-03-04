/**
 * Utility for formatting validation errors
 */

export function formatValidationError(error: any) {
  // If no errors found, return empty array
  if (!error.messages || error.messages.length === 0) {
    return { errors: [] }
  }

  // Extract the first error from the array
  const firstError = error.messages[0]

  // Return only the first error in the desired format
  return {
    errors: [
      {
        message: firstError.message, // Use the message from the first error
        field: firstError.field, // Use the field from the first error
      },
    ],
  }
}
