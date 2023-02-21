import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCharacters,
  getCharactersSuccess,
  getCharactersFailure,
} from "./apiSlice";
import axios from "axios";

// URL de la API para obtener personajes
const baseURL = "https://rickandmortyapi.com/api/character";

// Función asincrónica que utiliza async/await para obtener los personajes de la API
async function axiosCharacters() {
  try {
    const response = await axios.get(baseURL);
    return response.data.results;
  } catch (error) {
    throw error.message;
  }
}

// Generador que ejecuta la función axiosCharacters y actualiza el estado de la aplicación en consecuencia
function* getCharactersSaga() {
  try {
    const characters = yield call(axiosCharacters);
    yield put(getCharactersSuccess(characters));
  } catch (error) {
    yield put(getCharactersFailure(error));
  }
}

// Generador que escucha las solicitudes para obtener personajes y ejecuta el generador getCharactersSaga
export function* apiSaga() {
  yield takeLatest(getCharacters.type, getCharactersSaga);
}
