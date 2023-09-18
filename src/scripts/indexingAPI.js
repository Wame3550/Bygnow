const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const axios = require('axios');
var request = require('request');
var { google } = require('googleapis');
var key = require('./service_account.json');

const indexingAPI = async () => {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  const res = await axios.get(
    `/api/slugs`
  );

  const batch = res.data.map((data) => {
    return `https://www.wheelific.com/${data.slug}`;
  });

  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    }

    const items = batch.map((line) => {
      return {
        'Content-Type': 'application/http',
        'Content-ID': '',
        body:
          'POST /v3/urlNotifications:publish HTTP/1.1\n' +
          'Content-Type: application/json\n\n' +
          JSON.stringify({
            url: line,
            type: 'URL_UPDATED',
          }),
      };
    });

    const options = {
      url: 'https://indexing.googleapis.com/batch',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/mixed',
      },
      auth: { bearer: tokens.access_token },
      multipart: items,
    };
    request(options, (err, resp, body) => {
      console.log(body);
    });
  });
};

indexingAPI();
