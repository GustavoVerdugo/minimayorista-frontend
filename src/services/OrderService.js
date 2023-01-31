export function sendOrder() {
    post(`/api/payments`)
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