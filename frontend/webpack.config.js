module.exports = {
  // ... other configurations
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middlewares setup
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Your custom setup code for middlewares goes here

      return middlewares;
    },
  },
};
