import axios from 'axios';

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users');
        return data.map(
          (user: { login: string; avatar_url: string; id: string }) => ({
            id: user.id,
            name: user.login,
            avatar_url: user.avatar_url,
          })
        );
      } catch (error) {
        // log error and time in unix timestamp
        console.error(error, Date.now());
        throw new Error(error as string);
      }
    },
    getUser: async (_: any, args: any) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
