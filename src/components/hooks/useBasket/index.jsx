import { useContext } from "react";
import BasketContext from '../../BasketProvider';

export default function useBasket() {
    return useContext(BasketContext);
}


