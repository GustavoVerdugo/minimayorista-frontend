import FlowApi from "flowcl-node-api-client"

export async function handler(req, res) {
    const config = {
        "apiKey": "1F009A44-3301-41A9-A1C4-384L159BCBD6",
        "secretKey": "29162b1d72353edcdc0028dcb81fc778bf475b02",
        "apiURL": "https://sandbox.flow.cl/api",
        "baseURL": "https://minimayorista-web.onrender.com"
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
        const payment = new FlowApi(config);
        // Ejecuta el servicio
        let response = await payment.send(serviceName, params, "POST");
        //Prepara url para redireccionar el browser del pagador
        localStorage.setItem('tkn', response.token);
        let redirect = response.url + "?token=" + response.token;
        return res.json({
            redirect
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}