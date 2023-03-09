import { useState, useEffect, useContext } from 'react'
import { LOCAL, PROD } from '../config'
import { DataContext } from '../context/DataContext'

const useFetch = (url) => {
  const { loading, setLoading, saveProduct, saveCategories, saveMarcas, query, savePagination, saveComunas, saveTiposPagos, saveTiposEnvio } = useContext(DataContext);

  const getProducts = async () => {
    if (query == null) {
      const response = await fetch(`${PROD}productos?populate=*&sort[0]=nombre%3Aasc&pagination[page]=1&pagination[pageSize]=25`)
      const data = await response.json()
      await saveProduct(data.data);
      await savePagination(data.meta.pagination.pageCount)
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
  const getComunas = async () => {
    const response = await fetch(`${PROD}comunas?populate=*`)
    const data = await response.json()
    await saveComunas(data.data);
  }
  const getTipoPago = async () => {
    const response = await fetch(`${PROD}tipos-de-pagos?populate=*`)
    const data = await response.json()
    await saveTiposPagos(data.data);
  }
  const getTipoEnvio = async () => {
    const response = await fetch(`${PROD}envios?populate=*`)
    const data = await response.json()
    await saveTiposEnvio(data.data);
  }
  const getData = async () => {
    await getProducts();
    await getCategories();
    await getMarcas();
    await getComunas();
    await getTipoPago();
    await getTipoEnvio();
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, [])
  return { loading }
}

export default useFetch;