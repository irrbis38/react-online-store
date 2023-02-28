import { useContext } from "react";
import { ShopContext } from "./../context/context";

export const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        // addToCart,
    } = props;
    const { finalPrice } = price;
    const imageUrl = displayAssets[0].url;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrl} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => {
                        addToCart(mainId);
                    }}
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    ${finalPrice}
                </span>
            </div>
        </div>
    );
};
