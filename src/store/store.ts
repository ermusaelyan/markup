import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { postApi } from '../services/PostService.ts';
import searchSlice from "../slices/searchSlice.ts";

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    search: searchSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

