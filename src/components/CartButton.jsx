import { useContext } from "react";
import { ShopContext } from "../context/context";

export const CartButton = (props) => {
    const { quantity = 0 } = props;
    const { handleCartOpen } = useContext(ShopContext);
    return (
        <button className="cart" onClick={handleCartOpen}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart__quantity">{quantity}</span>
            ) : null}
        </button>
    );
};
