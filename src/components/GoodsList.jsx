import { useContext } from "react";
import { ShopContext } from "../context/context";
import { GoodsItem } from "./GoodsItem";

export const GoodsList = () => {
    const { goods } = useContext(ShopContext);

    if (!goods.length) {
        return <h2>Nothing here</h2>;
    }

    return goods.map((item) => <GoodsItem key={item.mainId} {...item} />);
};
