import React, {useContext,createContext, useState, useEffect}from 'react';

    import {toast} from "react-hot-toast";

    const Context = createContext();

    export const StateContext = ({ children}) => {
       const [showCart, setShowCart] = useState(false);
       const [darkMode, setDarkMode] = useState(false);
       const [menuOpen,setMenuOpen] = useState(false);


       const [cartItems, setCartItems] = useState([]);
        const [totalPrice, setTotalPrice] = useState(0);
        const [totalQuantities, setTotalQuantities] = useState(0);
        const [qty, setQty] = useState(1);

        let foundProduct;
        let index;


        const onAdd = (product, quantity) => {
          const checkProductInCart = cartItems.find((item)=> item._id === product._id);// will check if item is already in cart
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQuantities((prevTotalQuantities) =>prevTotalQuantities + quantity );
            if(checkProductInCart){ // if item is in cart we will first find the total price of our cart and then add the update the quantity and price 
            const updatedCartItems = cartItems.map((cartProduct) => {
              if(cartProduct._id === product._id){ // if they both have the same id we will just update the quantity of the item
                 return {...cartProduct, quantity:cartProduct.quantity + quantity}
              }
            })

            setCartItems(updatedCartItems)
                     }

          else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
          }
          toast.success(`${qty} ${product.name} added to cart`); //  A toast message displaying successes
        }  // function that checks if product is in cart if not adds new quantity

        const onRemove = (product) => {
          foundProduct = cartItems.find((item) => item._id === product._id);
          const newCartItems = cartItems.filter((item) => item._id !== product._id);
          setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price * foundProduct.quantity)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
           setCartItems(newCartItems )
        }

        const toggleCartItemQuantity = (id, value) => {
          foundProduct = cartItems.find((item) => item._id === id);
          index = cartItems.findIndex((product) => product._id === id);
          const newCartItems = cartItems.filter((item) => item._id !== id)
        // incorporate a find which checks if item is already in list an just update the value
          if(value === 'inc'){
           
            
           setCartItems( [...newCartItems, {...foundProduct, quantity: foundProduct.quantity +1}])
           setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price)
           setTotalQuantities(prevTotalQuantities => prevTotalQuantities+1)
  
          }
          else if(value === 'dec'){
            if(foundProduct.quantity > 1){
          [...cartItems, {...foundProduct, quantity: foundProduct.quantity -1}]
          
           setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity -1}])
           setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price)
           setTotalQuantities(prevTotalQuantities => prevTotalQuantities-1)
            }
          }
        }
        const incQty = () => {
            setQty((prevQty)=> prevQty +1)
        }

        const decQty = () => {
            setQty((prevQty)=> {
              if(prevQty -1 < 1) return 1;
              
                 return prevQty -1
            });
            
          
        }

        return (
            <Context.Provider
                value = 
                {{
                    showCart, 
                    setShowCart,
                    cartItems,
                    setCartItems, 
                    totalPrice,
                    setTotalPrice, 
                    totalQuantities, 
                    setTotalQuantities,
                    qty,
                    incQty,
                    decQty,
                    onAdd,
                    toggleCartItemQuantity,
                    onRemove,
                    darkMode,
                    setDarkMode,
                    menuOpen,
                    setMenuOpen
                }}
                >
                {children}
            </Context.Provider>
        )

    }
    export const useStateContext = () => useContext(Context);