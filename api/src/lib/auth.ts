import { AuthenticationError } from '@redwoodjs/graphql-server'

/**
 * TODO: Actually implement auth. For now, no one is authenticated and therefore
 * only public resources are available
 */
export const isAuthenticated = () => {
  return false
}

export const hasRole = ({ roles }) => {
  return roles !== undefined
}

// This is used by the redwood directive
// in ./api/src/directives/requireAuth

// Roles are passed in by the requireAuth directive if you have auth setup
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const requireAuth = ({ roles }) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You're not authenticated.")
  }
}
