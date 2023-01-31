import { sendOrder } from "../services/OrderService"

export function createOrder(data) {
    let arr = [];
    data.productos.map((item) => {
        arr.push({
            nombre: item.name,
            product_id: item.id,
            cantidad: item.cant,
            precio: parseInt(item.price)
        })
    })
    let payload = {
        data: {
            estado: data.estado,
            subtotal: data.subtotal,
            total: data.total,
            tipos_de_pago: data.tipos_de_pago,
            nota_cliente: data.nota_cliente,
            productos: arr,
            envio: data.envio.id,
            cliente: {
                nombre: data.nombre,
                apellido: data.apellido,
                direccion: data.direccion,
                region: data.region,
                ciudad: data.ciudad,
                comuna: data.comuna.attributes.nombre,
                email: data.email,
                telefono: data.telefono
            }
        }

    }
    let payDetail = {
        amount: data.total,
        email: data.email
    }
    sendOrder(payload, payDetail);
}