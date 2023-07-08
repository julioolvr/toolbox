// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  toolbox: {
    // __typename: 'Toolbox',
    id: '42',
    name: 'Toolbox',
    description: 'Toolbox description',
    tools: [],
    user: {
      username: 'Username',
    },
    userId: 'USER_ID',
  },
})
