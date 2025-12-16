module.exports = {
  apps: [
    {
      name: 'finonest-backend',
      script: './server/dist/index.js',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    },
    {
      name: 'finonest-frontend',
      script: 'npm',
      args: 'start',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};