import { createSlice } from "@reduxjs/toolkit"; // Redux Toolkit'ten `createSlice` fonksiyonunu alıyoruz.

// Ürünlerin sahip olacağı veri yapısını belirliyoruz.
const initialState = []; // Başlangıçta boş bir sepet dizisi.

export const cartSlice = createSlice({
    name: "cart", // Slice ismini "cart" olarak belirledik.
    initialState,
    reducers: {
        // Sepete ürün ekleyen reducer fonksiyonu
        addToCart: (state, action) => {
            const index = state.findIndex((pro) => pro.id === action.payload.id);
            
            // Eğer ürün sepette yoksa ekle, varsa miktarını artır.
            if (index === -1) {
                state.push({ ...action.payload, quantity: 1 }); // Ürün sepete eklenirken quantity = 1 olarak başlatılır.
            } else {
                state[index].quantity += 1; // Ürün zaten varsa miktarını 1 artır.
            }
        },

        // Sepetten ürün kaldıran reducer fonksiyonu
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    },
});

// Dışarıya reducer fonksiyonları export ediyoruz.
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
