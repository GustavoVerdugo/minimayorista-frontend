import PaymentLibrary from "../helpers/PaymentLibrary";

export async function createPay() {
    const config = {
        "apiKey": "1F009A44-3301-41A9-A1C4-384L159BCBD6",
        "secretKey": "29162b1d72353edcdc0028dcb81fc778bf475b02",
        "apiURL": "https://sandbox.flow.cl/api",
        "baseURL": "http://localhost:3000"
    }
    const optional = {
        "rut": "9999999-9",
        "otroDato": "otroDato"
    };
    //Prepara el arreglo de datos
    const params = {
        "commerceOrder": Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        "subject": "Pago de prueba",
        "currency": "CLP",
        "amount": 5000,
        "email": "maxyverdugo@gmail.com",
        "paymentMethod": 9,
        "urlConfirmation": config.baseURL + "/payment_confirm",
        "urlReturn": config.baseURL + "/result",
        ...optional
    };
    const serviceName = "payment/create";

    try {
        // Instancia la clase FlowApi
        const payment = new PaymentLibrary(config);
        // Ejecuta el servicio
        let response = await payment.send(serviceName, params, "POST");
        //Prepara url para redireccionar el browser del pagador
        localStorage.setItem('tkn', response.token);
        let redirect = response.url + "?token=" + response.token;
        console.log(`location: ${redirect}`)
    } catch (error) {
        console.log(error.message)
    }
}

export async function confirmPay() {
    try {
        let params = {
            token: localStorage.getItem('tkn')
        };
        let serviceName = "payment/getStatus";
        const payment = new PaymentLibrary(config);
        let response = await payment.send(serviceName, params, "GET");
        //Actualiza los datos en su sistema
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}

export async function statusPay() {
    try {
        let params = {
            token: localStorage.getItem('tkn')
        };
        let serviceName = "payment/getStatus";
        const payment = new PaymentLibrary(config);
        let response = await payment.send(serviceName, params, "GET");
        //Actualiza los datos en su sistema
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}