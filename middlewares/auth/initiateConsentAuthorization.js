const axios = require("axios");
const querystring = require("querystring");
const { KJUR } = require("jsrsasign");
const {
	privateKey,

	kid,
	clientId,
} = require("../../utils/constants/configConstants");
const {
	cacheControl,
	aud,
	redirectUri,
	nonce,
	scope,
	state,
	responseType,
	authorizUrl,
} = require("../../utils/constants/apiConstants");
const prepareRequestJWT = (consentId) => {
	const exp = Math.round(new Date().getTime() / 1000) + 1200; // 20min

	const joseHeader = `{"alg":"PS256","kid":"${kid}"}`;

	const payload = `{
  "claims": {
    "userinfo": {
      "openbanking_intent_id": {
        "value": "${consentId}",
        "essential": true
      }
    },
    "id_token": {
      "openbanking_intent_id": {
        "value": "${consentId}",
        "essential": true
      },
      "acr": {
        "essential": false,
        "values": [
          "urn:openbanking:psd2:sca",
          "urn:openbanking:psd2:ca"
        ]
      }
    }
  },
  "iss": "${clientId}",
  "aud": "${aud}",
  "response_type": "${responseType}",
  "client_id": "${clientId}",
  "state": "${state}",
  "exp": ${exp},
  "redirect_uri": "${redirectUri}",
  "nonce": "${nonce}",
  "scope": "openid ${scope}"
}`;

	const prvKey = privateKey;
	const requestJwt = KJUR.jws.JWS.sign("PS256", joseHeader, payload, prvKey);
	return requestJwt;
};

const initiateConsentAuthorization = async (req, res, next) => {
	const params = {
		response_type: responseType,
		client_id: clientId,
		state: state,
		scope: scope,
		nonce: nonce,
		request: prepareRequestJWT(req.ConsentId),
		redirect_uri: `${redirectUri}`,
	};
	var config = {
		method: "GET",
		url: authorizUrl,
		params,
		headers: {
			"cache-control": cacheControl,
			// "Proxy-Authorization": "",
		},
	};
	try {
		const response = await axios(config);
		const query = response.data.split("?")[1];
		const data = querystring.parse(query);
		req.authCode = data.id_token;
		next();
	} catch (error) {
		res.json({ message: "Internal Server Error!", data: error });
	}
};
module.exports = initiateConsentAuthorization;
