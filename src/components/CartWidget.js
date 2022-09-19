import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <>
      <FiShoppingCart />
      <span className="shoppingCartQuantity">0</span>
    </>
  );
};

export default CartWidget;
