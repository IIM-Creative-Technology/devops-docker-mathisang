const express = require('express')
const app = express()
const axios = require('axios')

app.listen(process.env.PORT || 5000, () => {
    console.log('Serveur démarré')
})

app.get('/', (req, res) => {
    axios.get('https://api.binance.com/api/v3/ticker/price')
        .then(function (response) {
            console.log(response);
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

})