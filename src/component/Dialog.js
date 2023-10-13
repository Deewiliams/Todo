import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AddTodo from "./AddTodo";
import ListTodo from "../pages/ListDo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogModel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
 <>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "30px",
      }}
    >
      <Button
        style={{
          textTransform: "none",
          backgroundColor: "black",
          color: "white",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add todo list
      </Button>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <br />
            <AddTodo />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </div>
      <ListTodo />    
 </>
  );
}
