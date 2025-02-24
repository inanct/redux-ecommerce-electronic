import { Provider } from "react-redux"
import Navbar from "./components/Navbar"
import { store } from "./redux/store"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import TrendingProducts from "./components/TrendingProducts"
import { Toaster } from "react-hot-toast"


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
        <Hero/>
        <Feature/>
        <TrendingProducts/>
        <Toaster position="bottom-center"
  reverseOrder={false}/>
      </Provider>
    </div>
  )
}

export default App
