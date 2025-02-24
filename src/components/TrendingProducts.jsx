const products = [
    {
        id: 0,
        img: "headphone-1.png",
        category: "Headphones",
        title: "Gaming Headphone",
        price: "109.00",
    },
    {
        id: 1,
        img: "mobil-1.png",
        category: "Mobile Tablets",
        title: "Galaxy Android Tablets",
        price: "300.00",
    },
    {
        id: 2,
        img: "headphone-2.png",
        category: "Headphones",
        title: "Wireless Headphone",
        price: "105.00",
    },
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
    {
        id: 7,
        img: "cpu-2.png",
        category: "CPU Heat Pipes",
        title: "Air Cooler",
        price: "80.00",
    },
    
];

const TrendingProducts = () => {
  return (
    <div className="container mt-32 p-14">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">Trending Products</h2>

         <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div className="text-black">New</div>
            <div>Featured</div>
            <div>Top Sellers</div>
         </div>

        </div>
    </div>
  )
}

export default TrendingProducts