import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

//
export const Cards = ({ id, resname, dishname, image, stars }: any) => {
  const [islike, setIslike] = useState(false);
  const changeLike = () => {
    setIslike((prev) => !prev);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{resname}</Card.Title>
        <Card.Text>{dishname}</Card.Text>
        <Button onClick={()=>changeLike()} variant="primary">{islike ? "Liked" : "Unliked"}</Button>
      </Card.Body>
    </Card>
  );
};
