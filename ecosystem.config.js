module.exports = {
  apps: [
    {
      name: 'Tazaker',
      port: '3000',
      exec_mode: 'cluster',

      script: './.output/server/index.mjs'
    }

  ],
};
