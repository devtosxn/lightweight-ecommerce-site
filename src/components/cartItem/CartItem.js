import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="product-image" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button
        className="CartItem__button"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
