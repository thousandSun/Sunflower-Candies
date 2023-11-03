import apiClient from "../apiClient"
import { Product } from "../types/Product"
import {useQuery} from "@tanstack/react-query"

export const useGetProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => (await apiClient.get<Product[]>(`products`)).data
    })
}