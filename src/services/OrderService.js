export function sendOrder(payload, payDetail) {
    let dt = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: "Pago Minimayorista",
        currency: "CLP",
        amount: payDetail.amount,
        email: payDetail.email,
        paymentMethod: 9,
        urlConfirmation: "https://minimayorista-web.onrender.com/payment_confirm",
        urlReturn: "https://minimayorista-web.onrender.com/result"
    }
    post(`https://payments-nple.onrender.com/apiFlow/create_order`,dt)
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        })
    /* post(`https://minimayorista-back.onrender.com/api/pedidos`, payload)
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        }) */
}

async function post(url, data) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();
}