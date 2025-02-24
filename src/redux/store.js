import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "./features/cartSlice"; // cartSlice dosyasından reducer'ı içe aktarıyoruz.

export const store = configureStore({
    reducer: {
        cart: cartReducer, // Burada `cartReducer` yerine `cart` yazdım ki kullanım kolay olsun.
    },
});

// JavaScript'te TypeScript tür tanımları olmaz, o yüzden aşağıdaki satırları kaldırdım.
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
