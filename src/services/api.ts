import { Product, ProductsResponse } from '../types/types';

const BASE_URL = 'https://dummyjson.com';
const ITEMS_PER_PAGE = 10;

export const fetchProducts = async (page: number): Promise<ProductsResponse> => {
  const skip = (page - 1) * ITEMS_PER_PAGE;
  const response = await fetch(`${BASE_URL}/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  
  return response.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar produto com ID ${id}`);
  }
  
  return response.json();
};

export const addProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  
  if (!response.ok) {
    throw new Error('Erro ao adicionar produto');
  }
  
  return response.json();
};

export const updateProduct = async (id: number, updates: Partial<Product>): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  
  if (!response.ok) {
    throw new Error(`Erro ao atualizar produto com ID ${id}`);
  }
  
  return response.json();
};

export const deleteProduct = async (id: number): Promise<{ id: number; isDeleted: boolean; deletedOn: string }> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Erro ao excluir produto com ID ${id}`);
  }
  
  return response.json();
};