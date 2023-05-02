const app = require("express").Router();
const createAccountAccessConsent = require("../middlewares/auth/createAccountAccessConsent");
const getClientCredentialToken = require("../middlewares/auth/getClientCredentialToken");
const initiateConsentAuthorization = require("../middlewares/auth/initiateConsentAuthorization");
const router = app;
router.get(
	"/middlewares",
	getClientCredentialToken,
	createAccountAccessConsent,
	initiateConsentAuthorization,
);
module.exports = router;
