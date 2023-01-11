import { DeleteOutline } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppDispatch, RootState } from "./redux/store";
import { addTodo, removeTodo, setTodoStatus } from "./redux/todoSlice";

function App() {
  const [todoDescription, setTodoDescription] = useState("");

  //redux
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  //return
  return (
    <Container maxWidth="xs">
      <Typography
        style={{ textAlign: "center", marginBottom: "2em" }}
        variant="h3"
      >
        Todo App
      </Typography>
      <TextField
        variant="outlined"
        label="ToDo Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        style={{
          marginBottom: "1em",
          marginTop: "1em",
        }}
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Todo
      </Button>
      <List>
        {todoList.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteOutline />
              </IconButton>
              <Checkbox
                edge="end"
                value={todo.completed}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !todo.completed, id: todo.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
