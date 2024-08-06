const { i18n } = require('./next-i18next.config')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const { loadEnvConfig } = require('@next/env')
loadEnvConfig('./', process.env.NODE_ENV !== 'production')

const port = process.env.PORT || '3000'
const serverApiUrl = process.env.BASE_URL + '/SERVICE_API';
const servicePath = process.env.SERVICE_PATH || '/SERVICE_PATH';
const serviceApi = process.env.SERVICE_API || process.env.BASE_URL+'/SERVICE_API';
const siteId = process.env.SITE_ID || '3'
const mode = siteId === '2' ? 'lg' : siteId === '3' ? 'sm' : 'sm'
const socialLoginEnabled = process.env.SOCIAL_LOGIN_ENABLED || 'false'


module.exports = {
  i18n,
  env: {
    PORT: port,
    PROXY_HOST: '/SERVICE_PATH',
    MODE: mode,
    SERVER_API_URL: serverApiUrl,
    SITE_ID: siteId,
    SOCIAL_LOGIN_ENABLED: socialLoginEnabled,
  },
  serverRuntimeConfig: {
    SERVICE_PATH: servicePath,
    SERVICE_API: serviceApi
  },
  publicRuntimeConfig: {
    SERVICE_PATH: servicePath,
    SERVICE_API: serviceApi
  },
  async rewrites() {
    return [
      {
        source: '/server/:path*',
        destination: `${serverApiUrl}/:path*`,
      },
    ]
  },
  //basePath:'/SERVICE_PATH'
}

