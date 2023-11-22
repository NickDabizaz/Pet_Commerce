// midtransConfig.js
const { Client } = require('midtrans-client');

const midtransClient = new Client({
  isProduction: false, // ganti menjadi true saat di production
  serverKey: 'Mid-server-RbIOkDxpIbwWrfhKdvFXrxRk',
  clientKey: 'Mid-client-7HtHx-NkyMCejLBG',
});

module.exports = midtransClient;
