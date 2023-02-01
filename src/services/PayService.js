export async function confirmPay() {
    try {
        let params = {
            token: localStorage.getItem('tkn')
        };
        const response = await fetch(`https://payments-nple.onrender.com/apiFlow/payment_confirm`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(params) // body data type must match "Content-Type" header
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}
