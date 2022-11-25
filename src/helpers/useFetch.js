import { useState, useEffect, useContext } from 'react'
import { LOCAL } from '../config'
import {DataContext} from '../context/DataContext'

const useFetch = (url) => {
    const { loading,setLoading,productos,saveProduct } = useContext(DataContext);

    const getProducts = async () => {
        const response = await fetch(`${LOCAL}productos?populate=*`)
        const data = await response.json()
        await saveProduct(data.data);
    }
    const getData = async () => {
        await getProducts();
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    return { loading }
}

export default useFetch;