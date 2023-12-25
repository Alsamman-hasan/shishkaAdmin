import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory, History } from "history";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

import { profileReducer } from "./profile/slice";
import { productReducer } from "./products/slice";

export const history: History = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = () =>
  combineReducers({
    profile: profileReducer,
    product: productReducer,
  });
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer());
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export const persist = persistStore(store);
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(saga);
