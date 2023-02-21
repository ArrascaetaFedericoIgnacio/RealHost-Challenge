import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import createSagaMiddleware from "redux-saga";
import { apiSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// Configuramos la store 
export const store = configureStore({
  reducer: {
    apiReducer, //reducer de la aplicación
  },
  middleware: [sagaMiddleware], // <- Agregamos middleware de Redux Saga
});

// Ejecutamos la saga que se encargará de escuchar las acciones de Redux
sagaMiddleware.run(apiSaga);
