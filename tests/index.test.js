const axios = require('axios')

const axiosMock = axios.get
test('Test response API', async () => {
    const url = 'https://api.binance.com/api/v3/ticker/price'
    let response = await axiosMock(url)

    expect(response.data).toBeDefined();
});