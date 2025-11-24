// API Configuration
// Change this to your deployed API URL after deployment
const API_CONFIG = {
  PREDICTION_API: 'https://horse-racer-ai-api.onrender.com/predict',
  BETA_SIGNUP_API: 'http://localhost:3001/api'
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}
