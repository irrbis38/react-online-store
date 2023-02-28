import { useContext } from "react";
import { ShopContext } from "./../context/context";
import { CartItem } from "./CartItem";

export const CartList = () => {
    const { order, removeItemFromCart } = useContext(ShopContext);
    const totalPrice = order.reduce(
        (sum, current) => sum + current.price.finalPrice,
        0
    );
    return (
        <div>
            <div className="overlay"></div>
            <ul className="collection with-header cart__list">
                <li className="collection-header">
                    <h4>Cart list</h4>
                </li>
                {order.map((item) => (
                    <CartItem
                        key={item.mainId}
                        {...item}
                        removeItemFromCart={removeItemFromCart}
                    />
                ))}
                <li className="collection-header">
                    <h4>Total price: ${totalPrice}</h4>
                </li>
            </ul>
        </div>
    );
};
