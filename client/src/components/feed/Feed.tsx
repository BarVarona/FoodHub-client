import React, { useEffect, useState, useContext } from "react";
import { dishs } from "../../api/dishs";
import { StateContext } from "../../components/context/StateContext";
import { Cards } from "./Cards";

export const Feed = () => {
  const [foods, setFoods] = useState<any[]>();
  const { appState, setAppState } = useContext(StateContext);
  useEffect(() => {}, []);
  return (
    <div>
      {foods?.map(({ id, resname, dishname, image, stars }) => (
        <Cards
          id={id}
          resname={resname}
          dishname={dishname}
          image={image}
          stars={stars}
        />
      ))}
    </div>
  );
};
