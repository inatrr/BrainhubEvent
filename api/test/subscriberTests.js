var assert = require('assert');
const Subscriber = require('../models/subsciber/subsciber');
const fetch = require('node-fetch');


describe('Subsciber', () => {
    describe('adding', () => {
        it('should return proper answer', async () => {
            const config = {
                apiUrl: 'http://localhost:9000/addGuest/post',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            let fakeSubscriber = new Subscriber(
                {
                    firstname: "Imie",
                    lastname: "Nazwisko",
                    email: "Imie.nazwisko@gmail.com",
                    date: "2019-09-09"
                });

            await fetch(config.apiUrl, {
                method: 'POST',
                headers: config.headers,
                body: JSON.stringify(fakeSubscriber),
            })
                .then(promiseText => promiseText.text())
                .then(data => assert.equal("Guest saved to event", data));

        });
    });
});
