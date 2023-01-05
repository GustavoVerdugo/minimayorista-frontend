import { useContext } from "react";
import { PROD } from "../config";
import { DataContext } from "../context/DataContext";

export async function usecallProductsAgain() {
    const { setSearching, searching, saveProduct, saveCategories, saveMarcas, query } = useContext(DataContext);

    setSearching(true)
    const response = await fetch(`${PROD}productos?populate=*`)
    const data = await response.json()
    await saveProduct(data.data);
    setSearching(false);
}

export async function usegetProductsFilters(qu) {
    const { setSearching, searching, saveProduct, saveCategories, saveMarcas, query } = useContext(DataContext);

    setSearching(true);
    const response = await fetch(`${PROD}productos?${qu}&populate=*&pagination[page]=1&pagination[pageSize]=9`)
    const data = await response.json()
    await saveProduct(data.data);
    setSearching(false);
}

export async function saveSubs(sub) {
    
}