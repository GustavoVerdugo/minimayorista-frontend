import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    const saveProduct = (prod) => {
        setProductos(prod);
    }

    const ret = {loading,setLoading,productos, saveProduct}
    return <DataContext.Provider value={ret}>{children}</DataContext.Provider>
}

export {DataContext, DataProvider};