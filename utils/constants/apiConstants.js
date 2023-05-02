var fs = require("fs");
var https = require("https");

const httpsAgent = new https.Agent({
	cert: fs.readFileSync(
		"C:/Users/kaly/Documents/upwork/HSBC-openBanking-integration/apiConfFiles/Transport.crt",
	),
	key: fs.readFileSync(
		"C:/Users/kaly/Documents/upwork/HSBC-openBanking-integration/apiConfFiles/private.key",
	),
});

const tokenEndpoint =
	"https://secure.sandbox.hsbc.com.bh/obf/open-banking/v1.1/oauth2/token";
const consentUrl =
	"https://secure.sandbox.hsbc.com.bh/obf/open-banking/v1.0/aisp/account-access-consents";
const consentPermissionData = {
	Data: {
		Permissions: [
			"ReadAccountsBasic",
			"ReadAccountsDetail",
			"ReadBalances",
			"ReadBeneficiariesBasic",
			"ReadBeneficiariesDetail",
			"ReadDirectDebits",
			"ReadFutureDatedPaymentsBasic",
			"ReadFutureDatedPaymentsDetail",
			"ReadStandingOrdersBasic",
			"ReadStandingOrdersDetail",
			"ReadTransactionsBasic",
			"ReadTransactionsCredits",
			"ReadTransactionsDebits",
			"ReadTransactionsDetail",
		],
	},
};
const authorizUrl =
	"https://sandbox.hsbc.com.bh/obf/open-banking/v1.1/oauth2/authorize";
const responseType = "code id_token";
const state = "dummy-state";
const grantType = "client_credentials";
const scope = "openid accounts";
const nonce = "dummy-nonce";
const redirectUri = "https://sg-dummy-acc-08-bh-tls.com/callback";
const aud = "https://secure.sandbox.hsbc.com.bh";
const cacheControl = "no-cache";
module.exports = {
	httpsAgent,
	consentUrl,
	consentPermissionData,
	tokenEndpoint,
	cacheControl,
	aud,
	redirectUri,
	nonce,
	scope,
	state,
	responseType,
	authorizUrl,
	grantType,
};
