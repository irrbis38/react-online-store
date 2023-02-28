import { useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { CartButton } from "./CartButton";
import { CartList } from "./CartList";
import { useContext } from "react";
import { ShopContext } from "./../context/context";

export const Shop = () => {
    const { setGoods, order, loading, isCartOpen } = useContext(ShopContext);

    const getGoods = () => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
            });
    };

    useEffect(getGoods, [setGoods]);

    return (
        <main className="container">
            <CartButton quantity={order.length} />
            <div className="content">
                {loading ? <Preloader /> : <GoodsList />}
            </div>
            {isCartOpen && <CartList />}
        </main>
    );
};
