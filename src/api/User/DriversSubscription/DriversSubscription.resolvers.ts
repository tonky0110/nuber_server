const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("driverUpdate"); // channel
      }
    }
  }
};

export default resolvers;
