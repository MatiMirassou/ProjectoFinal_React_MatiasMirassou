import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    //funcionalidad de agregar al carrito
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]) 
    }else{
        console.error('El producto ya se encuentra en el carrito')
    }
}

const removeItem = (id) => {
    setCart(cart.filter(product => product.id !== id))
}

const clearCart = () => {
    setCart([])
}

    //Totalizador de elementos en el carrito
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(product => {
            accu += product.quantity
        })
        return accu;
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach((item)=> {
            accu += item.quantity * item.price
            console.log(accu)
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{ cart, isInCart, totalQuantity, addItem, getTotal, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

