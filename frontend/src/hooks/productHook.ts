import apiClient from "../apiClient"
import { Product } from "../types/Product"
import {useQuery} from "@tanstack/react-query"

export const useGetProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => (await apiClient.get<Product[]>(`products`)).data
    })
}

export const useGetProductBySlugQuery = (slug: string) => {
    return useQuery({
        queryKey: ['products', slug],
        queryFn: async () => 
            (await apiClient.get<Product>(`products/${slug}`)).data
    })
}