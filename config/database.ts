export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5438),
      database: env('DATABASE_NAME', 'MY_DB_NAME'),
      user: env('DATABASE_USERNAME', 'MY_USER'),
      password: env('DATABASE_PASSWORD', 'MY_PWD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
