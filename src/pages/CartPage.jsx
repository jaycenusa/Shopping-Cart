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

    return (
        <div className="text-black bg-[#F9F8F8] px-6 py-10 mb-10 h-screen">
        <h1 className="mb-6 text-4xl font-extrabold">Shopping Cart</h1>
            <div className="flex gap-4 flex-wrap justify-center items-start">
                <div className="min-w-[65%] rounded-xl grow border bg-white border-[#F1DFE4]">
                    <div className="flex gap-2 justify-between border-b w-full p-4 bg-[#F9F9FE] border-[#F1DFE4] font-bold">
                    <p className="w-[45%]">Product</p>
                    <p className="flex-1">Price</p>
                    <p className="flex-1">Quantity</p>
                    <p className="flex-1">Actions</p>
                </div>
                {cart.map((item) => 
                    <Item key={item.id} item={item} adjustQuantity={adjustQuantity}/>)}
            </div>
            <Checkout cart={cart}/>
            </div>
        </div>
    )
}

export default CartPage;