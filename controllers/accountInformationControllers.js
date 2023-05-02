var axios = require("axios");
const { accountInfoEndpoint } = require("../utils/constants/apiConstants");
const getCustomerAccounts = (req, res) => {
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "Accounts listed successfully", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get list of accounts!", error });
	}
};

const getAccountBalance = (req, res) => {
	const accountId = req.body.accountId;
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts/${accountId}/balance`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "Account balance", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get account balance!", error });
	}
};
const getAccountTransactions = (req, res) => {
	const accountId = req.body.accountId;
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts/${accountId}/transactions`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "Account Transactions", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get list of account transactions!", error });
	}
};

const getCreditcardBalance = (req, res) => {
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "Accounts listed successfully", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get list of accounts!", error });
	}
};
const getCreditCardTransactions = (req, res) => {
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "creditcard transactions", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get list creditcard transactions!", error });
	}
};
const getCreditcardDueDate = (req, res) => {
	var config = {
		method: "GET",
		url: `${accountInfoEndpoint}/accounts`,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${req.accessToken}`,
			// "x-fapi-financial-id": "{{bank_sandbox_ob_fapi}}",
			// "Proxy-Authorization": "{{proxy-authorization}}",
		},
	};

	try {
		const response = (await = axios(config));
		res.json({ message: "Accounts listed successfully", data: response.data });
	} catch (error) {
		res.json({ message: "Faild to get list of accounts!", error });
	}
};
