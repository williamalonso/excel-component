/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Configurações gerais

    if (!isServer) {
      // Configurações específicas para o ambiente do navegador
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
}

module.exports = nextConfig