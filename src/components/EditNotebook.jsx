import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNote } from "../Actions/action";

function EditNotebook(props) {
  const [title, setTitle] = useState(props.noteBio.title);
  const [date, setDate] = useState(props.noteBio.date);
  const [description, setDescription] = useState(props.noteBio.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //props.editNote(props.noteBio.id, { title, date, description });
    const newbook = {
      id: props.noteBio.id, title, date, description
    }
    dispatch(editNote(newbook))
    setTitle("");
    setDate("");
    setDescription("");
    props.handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Notebook Title:</Form.Label>
          <Form.Control
            type="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="Date"
            placeholder="Date Achieved"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="Description"
            as="textarea"
            style={{ height: "100px" }}
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          type="submit"
          style={{ backgroundColor: "pink", border: "none" }}
        >
          Confirm
        </Button>
      </Form>
    </>
  );
}

export default EditNotebook;
