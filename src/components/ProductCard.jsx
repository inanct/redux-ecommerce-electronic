import toast from "react-hot-toast";
import { addToCart } from "../redux/features/cartSlice";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";


const ProductCard = ({id, img, category, title, price}) => {

  const dispatch = useDispatch()

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price: parseFloat(price),
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Added to Cart")
  };


  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img className="inline-block w-[200px] h-[200px] object-cover" src={img} alt={title} />
      </div>

       <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{title}</h2>

        <div className="mt-3 flex text-[#ffb21d]">
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiOutlineStar />
         <p className="text-gray-600 text-[14px]">(3 Review)</p>
        </div>

        <div>
          <h2 className="font-medium text-[#0989FF] text-xl">${price}</h2>
          <div className="flex gap-2 items-center bg-pink-500 text-white px-4 py-2 cursor-pointer hover:bg-[#0989FF]" onClick={addProductToCart}>
           <AiOutlineShoppingCart /> Add To Cart
          </div>
        </div>


        

       </div>

    </div>
  )
}

export default ProductCard