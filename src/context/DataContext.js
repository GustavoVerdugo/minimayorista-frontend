import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [filters, setFiltros] = useState([]);
    const [query, setQuery] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);

    const saveProduct = (prod) => {
        setProductos(prod);
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

    const ret = {
        loading, setLoading, productos, saveProduct, categorias, saveCategories, marcas,
        saveMarcas, saveFiltros, filters, saveQuery, query, searching, setSearching, saveCart,
        cart, saveTotal, total
    }
    return <DataContext.Provider value={ret}>{children}</DataContext.Provider>
}

export { DataContext, DataProvider };