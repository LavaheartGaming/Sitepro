module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('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'),
        },
        settings: {
          defaultFrom: 'lavahearth2003@gmail.com',
          defaultReplyTo: 'lavahearth2003@gmail.com',
          testAddress: 'lavahearth2003@gmail.com',
        },
      },
    },
  });