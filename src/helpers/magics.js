export function validateEmpty(data, step, setActive, setActive2, setActive3) {
    switch (step) {
        case 1:
            if (data.nombre.length > 0 && data.apellido.length > 0 &&
                data.direccion.length > 0 && data.comuna !== undefined &&
                data.email.length > 0 && data.telefono.length > 0) setActive(false);
            if (data.nombre.length <= 0 || data.apellido.length <= 0 ||
                data.direccion.length <= 0 || data.comuna === undefined ||
                data.email.length <= 0 || data.telefono.length <= 0) setActive(true);
            break;
        case 2:
            if (data.envio !== 0) setActive2(false)
            if (data.envio === 0) setActive2(true)
            break;
        case 3:
            break;
        default:
            console.log("No coincide expresión");
    }
}