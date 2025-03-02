import axios from 'axios';
import { BASE_URL } from '../api';
import { Product } from '../../types';

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;  
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getProductById = async (productId: number): Promise<Product> => {
    try {
        const response = await axios.get(`${BASE_URL}/product/${productId}`);
        return response.data; 
    } catch (error) {
        console.error('Məhsul alınarkən xəta baş verdi:', error);
        throw error;
    }
};

export const addProduct = async (newProduct: Product): Promise<Product> => {
    try {
        const response = await axios.post(`${BASE_URL}/products`, newProduct);
        return response.data;  
    } catch (error) {
        console.error('Məhsul əlavə edilərkən xəta baş verdi:', error);
        throw error;
    }
};

export const deleteProduct = async (productId: number): Promise<{ message: string }> => {
    try {
        const response = await axios.delete(`${BASE_URL}/product/${productId}`);
        return response.data;  
    } catch (error) {
        console.error('Məhsul silinərkən xəta baş verdi:', error);
        throw error;
    }
};

export const updateProduct = async (productId: number, updatedProduct: Product): Promise<Product> => {
    try {
        const response = await axios.put(`${BASE_URL}/product/${productId}`, updatedProduct);
        return response.data; 
    } catch (error) {
        console.error('Məhsul yenilənərkən xəta baş verdi:', error);
        throw error;
    }
};
