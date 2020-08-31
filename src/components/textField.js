import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddButton from "./btn";

const TextFieldInput = () => {
  const [event, setEvent] = useState("");

  return (
    <>
      <form>
        <TextField
          label="Input here..."
          fullWidth
          margin="normal"
          style={{ margin: 20 }}
          onChange={(e) => setEvent(e.target.value)}
          value={event}
        />
      </form>
      <AddButton event={event} setEvent={setEvent}></AddButton>
    </>
  );
};

export default TextFieldInput;
