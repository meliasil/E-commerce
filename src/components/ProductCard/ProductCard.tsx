import React from "react";
import style from "./ProductCard.module.scss";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt={title} />
      <h2 className={style.title}>{title}</h2>
      <p className={style.price}>${price}</p>
      <button className={style.addToCart} onClick={() => onAddToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
