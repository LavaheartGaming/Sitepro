module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a7d80557eab837683e1cefea84f33ff'),
  },
});
