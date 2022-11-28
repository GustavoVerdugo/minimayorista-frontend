import { useState, useEffect, useContext } from 'react'
import { LOCAL, PROD } from '../config'
import { DataContext } from '../context/DataContext'

const useFetch = (url) => {
    const { loading, setLoading, saveProduct, saveCategories, saveMarcas, query } = useContext(DataContext);

    const getProducts = async () => {
        if (query == null) {
            const response = await fetch(`${PROD}productos?populate=*`)
            const data = await response.json()
            await saveProduct(data.data);
        }
    }
    const getProductsByFilters = async () => {
        if (query != null) {
            setLoading(true);
            const response = await fetch(`${PROD}productos?${query}&populate=*&pagination[page]=1&pagination[pageSize]=9`)
            const data = await response.json()
            await saveProduct(data.data);
        }
    }
    const getCategories = async () => {
        const response = await fetch(`${PROD}categorias?populate=*`)
        const data = await response.json()
        await saveCategories(data.data);
    }
    const getMarcas = async () => {
        const response = await fetch(`${PROD}marcas?populate=*`)
        const data = await response.json()
        await saveMarcas(data.data);
    }
    const getData = async () => {
        await getProducts();
        await getCategories();
        await getMarcas();
        await getProductsByFilters();
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    return { loading }
}

export default useFetch;