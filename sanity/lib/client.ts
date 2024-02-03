import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:'sknYcBgjIsBOtSB5SpqeTJtaaZexJZL0OUoXRgRWAHzCVxPwklDquvuGQjOOgqfTZDJu6XOVZUUihUqULvVe9qUjmCiLhc5LFj4FyqPGWkl9uouozbP44sKCJpYimZrrcWPIPJmIqkncs8QeHkNlNGrwaJrdNOQ9FaFlbMU9qqtWC5b0WZHf',
})
