var axios = require("axios");
const {
	httpsAgent,
	consentUrl,
	consentPermissionData,
} = require("../../utils/constants/apiConstants");

var data = JSON.stringify(consentPermissionData);

const createAccountAccessConsent = async (req, res, next) => {
	var config = {
		method: "POST",
		url: consentUrl,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${req.clientCredentialToken}`,
			// "x-fapi-financial-id": "",
			Accept: "application/json",
			// "Proxy-Authorization": ""
		},
		httpsAgent: httpsAgent,
		data: data,
	};
	try {
		var response = await axios(config);
		req.ConsentId = response.data.Data.ConsentId;
		next();
	} catch (error) {
		return res.json({ message: "Internal Server Error", error });
	}
};
module.exports = createAccountAccessConsent;
