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

    const ret = {
        loading,setLoading,productos, saveProduct, categorias, saveCategories, marcas, 
        saveMarcas, saveFiltros, filters, saveQuery, query, searching, setSearching}
    return <DataContext.Provider value={ret}>{children}</DataContext.Provider>
}

export {DataContext, DataProvider};