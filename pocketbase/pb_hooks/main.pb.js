// routerAdd('GET', '/hello/:name', (c) => {
// 	let name = c.pathParam('name');

// 	return c.json(200, { message: 'Hello ' + name });
// });

// onRecordAfterCreateRequest((e) => {
// 	const message = new MailerMessage({
// 		from: {
// 			address: $app.settings().meta.senderAddress,
// 			name: $app.settings().meta.senderName
// 		},
// 		to: [{ address: e.record.email() }],
// 		subject: 'Welcome to the waitlist!',
// 		html: 'Thank you for joining the waitlist. We will be in touch soon.'
// 	});

// 	$app.newMailClient().send(message);

// 	console.log('User joined waitlist...', e.record.email());

// 	return c.json(200, { message: 'User joined waitlist' });
// }, 'waitlist');
