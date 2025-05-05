import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProducts";
import LoadingSpinner from "../../components/LoadingSpinner";
import StyledButton from "../../components/StyledButton";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, isError, error } = useProduct(id || "");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <p className="text-red-500 font-semibold text-lg mb-4">
          Erro ao carregar detalhes do produto:{" "}
          {(error as Error)?.message || "Produto não encontrado"}
        </p>
        <StyledButton primary onClick={() => navigate("/")}>
          Voltar para a lista de produtos
        </StyledButton>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <img
                src={activeImage || product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {product.images.length > 0 && (
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 cursor-pointer border-2 ${
                      (activeImage || product.thumbnail) === image
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h1>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-0.5 rounded">
                {product.category}
              </span>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-600">Estoque: {product.stock}</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-green-600 font-medium">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-gray-700 font-semibold mb-2">
                Especificações:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Marca: {product.brand}</li>
                <li>Categoria: {product.category}</li>
                <li>Avaliação: {product.rating}/5</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <StyledButton primary size="large" className="flex-1">
                Adicionar ao Carrinho
              </StyledButton>

              <StyledButton size="large" onClick={() => navigate("/")}>
                Voltar
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
