module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: 'mongodb://ajayarjunwadkar:Ajay4123@cluster0-shard-00-00.lzaoj.mongodb.net:27017,cluster0-shard-00-01.lzaoj.mongodb.net:27017,cluster0-shard-00-02.lzaoj.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-gzpaxf-shard-0&authSource=admin&retryWrites=true&w=majority'
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
