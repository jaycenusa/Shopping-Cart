import { Trash } from "lucide-react";
const Item = ({item, adjustQuantity}) => {
  return (
    <div className="flex gap-2 justify-between p-2 border-b border-[#F1DFE4]">
      <div className="w-[45%] flex gap-2 justify-start items-center">
        <div className="bg-[#EC7B95] p-2 rounded">
          <img src={item.image} className="h-16 w-16 object-contain"/>
        </div>
        <div className="max-w-[120px]">
          <p className="text-center font-bold text-xl truncate">{item.title}</p>
          <p className="text-[#ABA7A8]">${item.price.toFixed(2)} each</p>
        </div>
      </div>
      <div className="flex-1 flex gap-2 justify-start items-center font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</div>
      <div className="flex-1 flex gap-2 justify-start items-center">
        <div className="bg-[#F5F5F5] text-black rounded-md p-1 flex items-center text-lg w-full justify-between">
            <div onClick={() => adjustQuantity(item, -1)} className="bg-[#D8CAE1] rounded-md cursor-pointer hover:bg-amber-400 w-4 px-4 py-1 flex justify-center items-center">
                -
            </div>
            <span className="text-lg w-4">{item.quantity}</span>
            <div onClick={() => adjustQuantity(item, 1)} className="bg-[#D8CAE1] rounded-md cursor-pointer hover:bg-amber-400 w-4  px-4 py-1 flex justify-center items-center">
                +
            </div>
    </div>
      </div>
      <div onClick={() => adjustQuantity(item, -item.quantity)} className="flex-1 flex gap-2 justify-start items-center cursor-pointer">
        <Trash className="w-5 h-5 text-red-600 "/>
            Delete
      </div>
    </div>
  )
}

export default Item;