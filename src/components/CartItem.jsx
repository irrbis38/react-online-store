export const CartItem = (props) => {
    return (
        <li className="collection-item">
            <div>
                {props.displayName}, ${props.price.finalPrice}
                <button
                    className="secondary-content cart__remove"
                    onClick={() => props.removeItemFromCart(props.mainId)}
                >
                    <i className="material-icons">close</i>
                </button>
            </div>
        </li>
    );
};
