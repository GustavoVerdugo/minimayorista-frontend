import { useState, useEffect, useContext } from 'react'
import { LOCAL } from '../config'
import { DataContext } from '../context/DataContext'

const useFetchCustom = (url) => {
    const { setSearching, searching, saveProduct, saveCategories, saveMarcas, query } = useContext(DataContext);

    const getProductsByFilters = async () => {
        if (query != null) {
            setSearching(true);
            const response = await fetch(`${PROD}productos?${query}&populate=*&pagination[page]=1&pagination[pageSize]=9`)
            const data = await response.json()
            await saveProduct(data.data);
        }
    }
    const getData = async () => {
        await getProductsByFilters();
        setSearching(false);
    }
    useEffect(() => {
        getData();
    }, [query])
    return { searching }
}

export default useFetchCustom;