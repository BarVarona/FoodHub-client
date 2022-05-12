import React, { useEffect, useState, useContext } from "react";
import dishesMocData from "../../api/foodDb.json";
import { StateContext } from "../../components/context/StateContext";
import { IDishes } from "../../interface/IDishes.model";
import { Cards } from "./Cards";

export const Feed = () => {
  // please be attention that in useState i add operator null  <IDishes[]|null>
  const [foods, setFoods] = useState<IDishes[] | null>(dishesMocData);
  const { appState, setAppState } = useContext(StateContext);
  useEffect(() => {
    console.log({ foods });

    // Here we use a Hook that called useEffect to fetch all data from the service from the APi
    // after in setAppState initial  appState.dishes to contain  all dishes that come from api
   
      setAppState({ ...appState, dishes: dishesMocData });
      setFoods(appState.dishes);
    
  }, [foods]);

  return (
    <div>
      {appState?.dishes?.map(({ id, resname, dishname, image, stars }, index) => (
          <Cards
            key={index}
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
