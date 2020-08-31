import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { CREATE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";

const AddButton = ({ event, setEvent }) => {
  const { dispatch } = useContext(AppContext);
  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      event,
    });

    setEvent("");
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={event === ""}
      >
        Add
      </Button>
    </>
  );
};

export default AddButton;
