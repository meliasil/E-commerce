import Image from "next/image";
import style from "./Cart.module.scss";

interface CartProps {
  items: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
  onRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveFromCart }) => {
  return (
    <div className={style.cart}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
