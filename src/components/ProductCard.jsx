import { addToCart } from "../redux/features/cartSlice";


const ProductCard = ({id, img, category, title, price}) => {

  const dispatch = useAppDispatch()

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
    <div>ProductCard</div>
  )
}

export default ProductCard