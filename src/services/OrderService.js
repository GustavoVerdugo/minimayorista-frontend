export async function sendOrder(payload, payDetail) {
    localStorage.setItem('payload', payload);
    let dt = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: "Pago Minimayorista",
        currency: "CLP",
        amount: payDetail.amount,
        email: payDetail.email,
        paymentMethod: 9,
        urlConfirmation: "https://payments-nple.onrender.com/apiFlow/payment_confirm",
        urlReturn: "https://payments-nple.onrender.com/apiFlow/result"
        /* https://minimayorista-web.onrender.com/result */
    }
    const response = await fetch(`https://payments-nple.onrender.com/apiFlow/create_order`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(dt) // body data type must match "Content-Type" header
    });
    const data = await response.json();
    return data;
}

export async function confirmOrder(payl) {
    const response = await fetch(`https://minimayorista-back.onrender.com/api/pedidos`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payl) // body data type must match "Content-Type" header
    });
    const data = await response.json();
    return data;
}