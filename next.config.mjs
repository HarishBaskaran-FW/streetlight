const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/streetlight/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};
