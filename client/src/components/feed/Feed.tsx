import React, { useEffect, useState, useContext } from "react";
import { dishs } from "../../api/dishs";
import { StateContext } from "../../components/context/StateContext";
import { IDishes } from "../../interface/IDishes.model";
import { Cards } from "./Cards";


export const Feed = () => {
  // please be attention that in useState i add operator null  <IDishes[]|null>
  const [foods, setFoods] = useState<IDishes[]|null>();
  const { appState, setAppState } = useContext(StateContext);
  useEffect(() => {
    // Here we use a Hook that called useEffect to fetch all data from the service from the APi
    // after in setAppState initial  appState.dishes to contain  all dishes that come from api 

    setAppState({ ...appState, dishes: dishs() });
    setFoods(appState.dishes);
  }, []);
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
