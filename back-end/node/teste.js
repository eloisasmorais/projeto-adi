const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const port = 3333;
app.listen(port, () => {
	console.log(`running on port ${port}.`);
});

var client_id = '6c830e442c6e4d77910a0c72cbb97774'; // Your client id
var client_secret = 'e0d82e79b083447790ffe590151c704e'; // Your secret

// your application requests authorization
var authOptions = {
	url: 'https://accounts.spotify.com/api/token',
	headers: {
		Authorization:
			'Basic ' +
			(new Buffer.alloc(11, client_id + ':' + client_secret).toString(
				'base64'
			),
			'base64'),
	},
	form: {
		grant_type: 'client_credentials',
	},
	json: true,
};

axios.post('https://accounts.spotify.com/api/token', {
	headers: {
		Authorization:
			'Basic ' +
			(new Buffer.alloc(11, client_id + ':' + client_secret).toString(
				'base64'
			),
			'base64'),
	},
	form: {
		grant_type: 'client_credentials',
	},
	json: true,
}).then((error, response, body)=>{
    if (!error && response.statusCode === 200) {
        				// use the access token to access the Spotify Web API
        				var token = body.access_token;
        				var options = {
        					url: 'https://api.spotify.com/v1/users/jmperezperez',
        					headers: {
        						Authorization: 'Bearer ' + token,
        					},
        					json: true,
        				};
        				axios.get('https://api.spotify.com/v1/users/jmperezperez', {headers: {
                            Authorization: 'Bearer ' + token,
                        },
                        json: true,}).then((error, response, body) => console.log(body))
        			}
        		}
);

// app.post('/', () => {
// 	authOptions,
// 		function (error, response, body) {
// 			if (!error && response.statusCode === 200) {
// 				// use the access token to access the Spotify Web API
// 				var token = body.access_token;
// 				var options = {
// 					url: 'https://api.spotify.com/v1/users/jmperezperez',
// 					headers: {
// 						Authorization: 'Bearer ' + token,
// 					},
// 					json: true,
// 				};
// 				app.get(options, function (error, response, body) {
// 					console.log(body);
// 				});
// 			}
// 		};
// });
