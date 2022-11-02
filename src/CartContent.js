import { createContext, useState} from "react";
import { productsArray } from "./productsStore";

const CartContext = createContext ({

    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}

});

export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([]);

    // [ { id: 1, quantity: 2} ]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id).quantity 
            if (quantity === undefined ){
                return 0; 
            }

            return quantity; 
    }

    function addOneToCart(id) {

        const quantity = getProductQuantity(id);

        if (quantity === 0 ){

        }else{
            setCartProducts(
                [...cartProducts, 
                {
                    id: id,
                    quantity: 1
                }]
            )
        }

    }

    function removeOneFromCart() {

    }

    function deleteFromCart(){

    }

    function getTotalCost() {


    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
            </CartContext.Provider>

    )
}