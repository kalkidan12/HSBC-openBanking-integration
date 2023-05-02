var axios = require("axios");
const { clientId } = require("../../utils/constants/configConstants");
const {
	redirectUri,
	tokenEndpoint,
	httpsAgent,
} = require("../../utils/constants/apiConstants");
var qs = require("qs");

const getRefreshToken = async (req, res, next) => {
	var data = qs.stringify({
		grant_type: "authorization_code",
		code: req.authCode, //"auth code from consent authorization",
		redirect_uri: redirectUri,
		client_id: clientId,
	});
	var config = {
		method: "POST",
		url: tokenEndpoint,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			// "Proxy-Authorization": "",
		},
		httpsAgent: httpsAgent,

		data: data,
	};
	try {
		const response = await axios(config);
		req.accessToken = await response.data.accessToken;
		req.refreshToken = await response.data.refreshToken;
		next();
	} catch (error) {
		res.json({ message: "Internal server error!", error });
	}
};
module.exports = getRefreshToken;
