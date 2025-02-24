import ProductCard from "./ProductCard";

const products = [
    
 
    {
        id: 3,
        img: "headphone-3.png",
        category: "Headphones",
        title: "Wireless Headphone",
        price: "199.00",
    },
    {
        id: 4,
        img: "mobile-2.png",
        category: "Mobile Tablets",
        title: "Iphone 14 Pro",
        price: "1099.00",
    },
    {
        id: 5,
        img: "ipad-1.png",
        category: "Mobile Tablets",
        title: "Apple iPad Air",
        price: "300.00",
    },
    {
        id: 6,
        img: "cpu-1.png",
        category: "CPU Heat Pipes",
        title: "DeepCool Air Cooler",
        price: "80.00",
    },
    
    
];

const NewArrival = () => {
  return (
    <div className="container mt-32 p-14">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">New Arrival</h2>

         
        </div>

       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((item) => (
            <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            category={item.category}
            title={item.title}
            price={item.price}
            />
        ))}
 
       </div> 

    </div>
  )
}

export default NewArrival