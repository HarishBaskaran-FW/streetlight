const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  assetPrefix: isProd ? '/streetlight/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};
