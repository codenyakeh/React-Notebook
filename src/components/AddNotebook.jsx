import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { newNotebook } from "../Actions/action";

function AddNotebook(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newNotebook({ title, date, description, id: uuid() });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
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
            type="description"
            placeholder="Description"
            as="textarea"
            style={{ height: "100px" }}
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "pink", border: "none" }}
          type="submit"
        >
          Add NoteBook
        </Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = {
  newNotebook: newNotebook,
};

export default connect(null, mapDispatchToProps)(AddNotebook);
