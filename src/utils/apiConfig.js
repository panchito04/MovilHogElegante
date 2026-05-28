// src/utils/apiConfig.js
const baseApiUrl = import.meta.env.VITE_API_URL || 'https://backhogele.onrender.com';
const isCapacitor = !!(window.Capacitor || (window.location.hostname === 'localhost' && window.location.port === ''));
let dynamicApiUrl = baseApiUrl;

if (isCapacitor && (baseApiUrl.includes('localhost') || baseApiUrl.includes('127.0.0.1'))) {
  dynamicApiUrl = baseApiUrl.replace('localhost', '10.0.2.2').replace('127.0.0.1', '10.0.2.2');
  console.log('📱 Capacitor native environment detected. Dynamic API URL mapped:', dynamicApiUrl);
}

export const API_URL = dynamicApiUrl;
export default API_URL;
