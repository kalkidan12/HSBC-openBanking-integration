var axios = require("axios");
var qs = require("qs");
const {
	httpsAgent,
	tokenEndpoint,
	grantType,
} = require("../../utils/constants/apiConstants");
const { clientId } = require("../../utils/constants/configConstants");

var data = qs.stringify({
	grant_type: grantType,
	scope: "accounts",
	client_id: clientId,
});
var config = {
	method: "POST",
	url: tokenEndpoint,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
	httpsAgent: httpsAgent,
	data: data,
};

const getClientCredentialToken = async (req, res, next) => {
	try {
		var response = await axios(config);
		req.clientCredentialToken = await response.data.access_token;
		// res.status(200).json(response.data);
		next();
	} catch (error) {
		return res.json({
			message: "server error to get access token!",
			error: error,
		});
	}
};

module.exports = getClientCredentialToken;
