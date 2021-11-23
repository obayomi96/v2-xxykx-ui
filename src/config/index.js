
   
const commonEnvs = {
  SECRET_KEY: process.env.SECRET_KEY,
};


const config = Object.freeze({
  local: {
    ...commonEnvs,
    API_URL: process.env.REACT_APP_API_URL,
  },
  development: {
    ...commonEnvs,
    API_URL: process.env.REACT_APP_API_URL,
  },
  staging: {
    ...commonEnvs,
    API_URL: process.env.STAGING_API_URL,
  },
  production: {
    ...commonEnvs,
    API_URL: process.env.PRODUCTION_API_URL,
  },
});

export default config[commonEnvs.ENVIRONMENT];
