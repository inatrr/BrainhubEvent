var assert = require('assert');
const Subscriber = require('../models/subsciber/subsciber');



describe('Subsciber', () => {
    describe('adding', () => {
        it('should return proper answer', () => {
            const config = {
                apiUrl: 'http://localhost:9000/testAPI/post',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            let fakeSubscriber = new Subscriber(
                {
                    firstname: "John",
                    lastname: "Newman",
                    email: "john.newman@gmail.com",
                    date: "2019-09-09"
                });
                

            const response = fetch(config.apiUrl, {
                method: 'POST',
                headers: config.headers,
                body: JSON.stringify(fakeSubscriber),
            });

            let message = response.text()
            assert.equal("Guest saved to database", message);
        });
    });
});
