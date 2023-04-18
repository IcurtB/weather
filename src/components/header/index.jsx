import React from "react";
import { Button } from "react-bootstrap";
export const Header = () => {
  return (
    <div
      className=" container text-bg-primary px-3 py-1 d-flex gap-3"
      style={{ height: "60px" }}
    >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </div>
  );
};
