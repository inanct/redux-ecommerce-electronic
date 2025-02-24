import { Provider } from "react-redux"
import Navbar from "./components/Navbar"
import { store } from "./redux/store"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import TrendingProducts from "./components/TrendingProducts"
import { Toaster } from "react-hot-toast"
import Banner from "./components/Banner"
import NewArrival from "./components/NewArrival"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <Hero/>
        <Feature/>
        <TrendingProducts/>
        <Banner/>
        <NewArrival/>
        <Footer/>
        <Toaster position="bottom-center"
  reverseOrder={false}/>
      </Provider>
    </div>
  )
}

export default App
