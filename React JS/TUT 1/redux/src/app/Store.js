import {configureStore} from "@reduxjs/toolkit";
import  CounterSlice  from "../features/counter/CounterSlice";

export const Store = configureStore({
        reducer: {
            counter : CounterSlice
        }
})