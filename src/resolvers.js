import User from "./models/User";

export const resolvers = {
  Query: {
    getUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id)
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      return await newUser.save();
    },
    deleteUser: async (_, { id }) => await User.findByIdAndDelete(id),
    updateUser: async (_, { id, input }) =>
      await User.findByIdAndUpdate(id, input, { new: true })
  }
};
