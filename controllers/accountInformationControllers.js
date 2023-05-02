var axios = require("axios");

const getCustomerAccounts = (req, res) => {
	var config = {
		method: "get",
		url: "",
		headers: {
			Accept: "application/json",
			Authorization: "Bearer ",
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
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
