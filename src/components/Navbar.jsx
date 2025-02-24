import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
     const cartCount = useSelector((state) => state.cart.length); // Doğru kullanım

  return (
    <div className="pt-4 bg-white top-0 sticky">
        <div className="container p-14">
            <div className="flex justify-between items-center">
             
             <h1 className="text-4xl font-bold">Logo</h1>

            <div className="lg:flex hidden w-full max-w-[500px]">
              <input className="border-2 border-cyan-600 px-6 w-full" type="text" placeholder="Search for products..." />

              <div className="bg-cyan-600 text-white text-[26px] grid place-items-center px-4"><BsSearch /></div>
            </div>

            <div className="flex gap-4 md:gap-8 items-center">
                <div className="md:flex gap-3 hidden">
                    <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                        <AiOutlineUser />
                    </div>

                    <div>
                        <p className="text-gray-500">Hello, Sign in</p>
                        <p className="font-medium">Your Account</p>
                    </div>
                 

                    <div className="text-gray-500 text-[32px] relative">
                        <AiOutlineShoppingCart />
                        <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                          {cartCount}
                        </div>
                    </div>


                </div>
            </div>



            </div>
        </div>
    </div>
  )
}

export default Navbar