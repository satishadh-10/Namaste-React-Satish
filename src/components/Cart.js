import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return <div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">cart</h1>
        <div className="w-6/12 m-auto p-2">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
                Clear Cart</button>
                {cartItems.length == 0 && <h1>Cart is Empty. Please Add Items</h1>}
            <ItemsList items={cartItems} />
        </div>
        </div>
        
}

export default Cart;