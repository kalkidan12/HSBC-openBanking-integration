var axios = require("axios");

const getCustomerAccounts = (req, res) => {
	var config = {
		method: "get",
		url: "https://api.ob.hsbc.co.uk/obie/open-banking/v3.1/aisp//obf/open-banking/v1.0/aisp/accounts",
		headers: {
			Accept: "application/json",
			Authorization: "Bearer {{bank_sandbox_ob_accessToken}}",
			"x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			"Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getSavingAccountBalance = () => {};
const getSavingAccountTransactions = () => {};
const getCreditcardBalance = () => {};
const getCreditcardTransactions = () => {};
const getCreditcardDueDate = () => {};
