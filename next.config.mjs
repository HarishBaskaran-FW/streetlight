import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? '/streetlight/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./'),
    };
    return config;
  },
};
