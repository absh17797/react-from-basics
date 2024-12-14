import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const productsList = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "High-quality wireless headphones with noise cancellation.",
            price: 120,
            image: "https://picsum.photos/150/150",
            qty: 0
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Waterproof smart watch with health tracking features.",
            price: 250,
            image: "https://picsum.photos/450/200",
            qty: 0

        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            description: "Portable speaker with excellent sound quality.",
            price: 80,
            image: "https://picsum.photos/449/201",
            qty: 0

        },
        {
            id: 4,
            name: "Wired Speaker",
            description: "Wired speaker with excellent sound quality.",
            price: 80,
            image: "https://picsum.photos/450/199",
            qty: 0

        },
    ];
    const [products, setproducts] = useState(productsList)
    const addToCart = (productId,qty) => {
        setproducts(products.map((item) => {
            if(item.id == productId) {
                item.qty = item.qty + qty // = 1;
                return item
            }
            else return item
                 
        }));
    };
    const decreaseQtyFromCart = (productId,qty) => {
        setproducts(products.map((item) => {
            if(item.id == productId) {
                item.qty -= 1;
                return item
            }
            else return item
                 
        }));
    };
    const removeFromCart = (productId) => {
        setproducts(products.map((item) => {
            if(item.id == productId) {
                item.qty = 0;
                return item
            }
            else return item
                 
        }));
    };

    return (
        <CartContext.Provider value={{ products, addToCart, decreaseQtyFromCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
