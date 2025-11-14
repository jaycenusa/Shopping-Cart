import { Link } from "react-router";

const Checkout = ({ cart }) => {
    const total = cart.reduce((accumulator, prod) => {
        return accumulator + (prod.quantity * prod.price);
    }, 0);

    return (
        <div className="min-h-80 rounded px-3 py-4 bg-white border border-[#F1DFE4] flex flex-col justify-center grow">
        {/* <BasicModal open={open} onClose={() => setOpen(false)} /> */}
        <p className="text-xl font-bold">Order Summary</p>
        <div className="flex justify-between mb-4 mt-4">
            <p className="text-[#705f64] ">Subtotal</p>
            <p className="text-[#686163] ">{total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-4">
            <p className="text-[#686163]">Shipping</p>
            <p className="text-[#686163]">FREE</p>
        </div>
        <hr className="bg-[#F4E6EA] h-px border-0 mb-4" />
        <div className="flex justify-between">
            <p className="font-bold text-xl ">Total</p>
            <p className="text-[#FF1F4A] font-bold text-xl">{total.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
            {/* <Link onClick={() => setOpen(true)} className="bg-[#261675] text-white rounded-xl w-full py-3 font-bold cursor-pointer hover:bg-[#3B2D83] text-center">Proceed to Checkout</Link> */}
            <Link to="/shop" className="bg-[#E3E6FA] text-black rounded-xl w-full py-3 font-bold cursor-pointe text-center">Continue Shopping</Link>
        </div>
        </div>
    )
}

export default Checkout;