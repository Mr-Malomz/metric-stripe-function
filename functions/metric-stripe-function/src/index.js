const axios = require('axios');

module.exports = async function (req, res) {
	const data = {
		amount: 100,
		currency: 'usd',
		payment_method: 'pm_card_visa',
	};

	const body = `amount=${data.amount}&currency=${data.currency}&payment_method=${data.payment_method}`;

	await axios
		.post('https://api.stripe.com/v1/payment_intents', body, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			auth: {
				username: 'REPLACE WITH STRIPE SECRET KEY',
			},
		})
		.then((_) =>
			res.json({
				status: 200,
				message: 'Subscription processed successfully',
			})
		)
		.catch((_) =>
			res.json({
				status: 500,
				message: 'Error processing subscription',
			})
		);
};
