import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./reducer/apiSlice";
import ApiConsume from "./component/apiConsume";
import "./main.css";

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.apiReducer.characters);

  console.log(characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      <ApiConsume />
    </div>
  );
}

export default App;
