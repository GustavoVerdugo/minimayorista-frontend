import FlowApi from "flowcl-node-api-client"

export async function handler() {
    try {
        let params = {
            token: localStorage.getItem('tkn')
        };
        let serviceName = "payment/getStatus";
        const payment = new FlowApi(config);
        let response = await payment.send(serviceName, params, "GET");
        //Actualiza los datos en su sistema
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}