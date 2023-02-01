import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [comunas, setComunas] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [filters, setFiltros] = useState([]);
    const [query, setQuery] = useState(null);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [tiposPagos, setTiposPagos] = useState([]);
    const [tiposEnvio, setTiposEnvio] = useState([]);
    const [confirmate, setConfirmate] = useState([]);

    const saveProduct = (prod) => {
        setProductos(prod);
    }

    const saveConfirmate = (cc) => {
        setConfirmate(cc);
    }

    const savePagination = (pag) => {
        setPagination(pag);
    }

    const saveComunas = (com) => {
        setComunas(com);
    }

    const saveTiposPagos = (tp) => {
        setTiposPagos(tp);
    }

    const saveTiposEnvio = (te) => {
        setTiposEnvio(te);
    }

    const saveCategories = (categ) => {
        setCategorias(categ);
    }

    const saveMarcas = (marca) => {
        setMarcas(marca);
    }

    const saveFiltros = (filt) => {
        setFiltros(filt);
    }

    const saveQuery = (query) => {
        setQuery(query);
    }
    const deleteProduct = (id) => {
        let arr = cart;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                arr.splice(i, 1)
            }
        }
        setCart(arr)
    }

    const saveCart = (prod) => {
        if (cart.find(x => x.id === prod.id)) {
            let arr = cart;
            let temp = cart.find(x => x.id === prod.id)
            prod.cant = prod.cant + temp.cant;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === temp.id) {
                    arr.splice(i, 1)

                }
            }
            setCart(arr => [...arr, prod]);
        } else {
            setCart(cart => [...cart, prod]);
        }
    }

    const saveTotal = () => {
        let arr = [];
        let totalPagar = 0;
        cart.map((prod) => {
            totalPagar += (parseInt(prod.price) * parseInt(prod.cant))
        });
        arr.push({
            productos: products,
            totalPagar: totalPagar
        });
        setCarrito(arr);
    }

    const editCantidad = (prod) => {
        let arr = cart;
        let tmp = cart.find(x => x.id === prod.id);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === tmp.id) {
                arr.splice(i, 1)
            }
        }
        setCart(arr => [...arr, prod]);
    }

    const ret = {
        loading, setLoading, productos, saveProduct, categorias, saveCategories, marcas,
        saveMarcas, saveFiltros, filters, saveQuery, query, searching, setSearching, saveCart,
        cart, saveTotal, total, editCantidad, savePagination, pagination, page, setPage, saveComunas,
        comunas, saveTiposPagos, tiposPagos, saveTiposEnvio, tiposEnvio, saveConfirmate, confirmate,
        deleteProduct, setCart
    }
    return <DataContext.Provider value={ret}>{children}</DataContext.Provider>
}

export { DataContext, DataProvider };