import { Link}  from "react-router";
import Item from "../components/SelectedItem.jsx";
import Checkout from "../components/Checkout.jsx";

const CartPage = ({cart, adjustQuantity}) => {
    
    if(cart.length === 0){
        return (
            <div className="text-black bg-[#F9F8F8] px-6 py-10 mb-10 h-screen">
                <h1 className="mb-6 text-4xl font-extrabold">Shopping Cart</h1>
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-[#686163] text-2xl">Your cart is empty</p>
                    <p className="text-[#686163] text-xl">Start shopping to add items to your cart</p>
                    <Link to="/shop" className="bg-[#3A2C82] rounded-md px-4 py-2 text-white font-bold">View All Products</Link>
                </div>
            </div>
        )
    }
}

export default CartPage;