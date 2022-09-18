export const ETHERSCAN_URL = import.meta.env.VITE_APP_ETHERSCAN_URL;
if (!ETHERSCAN_URL) {
  throw new Error('VITE_APP_ETHERSCAN_URL must be set on .env');
};