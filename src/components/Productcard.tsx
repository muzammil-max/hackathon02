import React from "react";
import Image from "next/image";

interface Product {
  image: string;
  title: string;
  price: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const products: Product[] = [
    {
      image: "/dandy_chair.jpg",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      image: "/rustic_vase_set.jpg",
      title: "Rustic Vase Set",
      price: "£155",
    },
    {
      image: "/silky_vase.jpg",
      title: "The Silky Vase",
      price: "£125",
    },
    {
      image: "/lucy_lamp.jpg",
      title: "The Lucy Lamp",
      price: "£399",
    },
    {
      image: "/poplar_sofa.jpg",
      title: "The Poplar suede sofa",
      price: "£980",
    },
    {
      image: "/dandy_chair.jpg",
      title: "The Dandy chair",
      price: "£250",
    },
    {
      image: "/dandy_chair.jpg",
      title: "The Dandy chair",
      price: "£250",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">New ceramics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
