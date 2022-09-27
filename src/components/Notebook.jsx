import { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNotebook } from "../Actions/action";
import EditNotebook from "./EditNotebook";

function Notebook(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    props.delete(props.noteBio.id);
    dispatch(deleteNotebook(props.noteBio.id));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MY NOTEBOOK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNotebook
          editNote={props.editNote}
          noteBio={props.noteBio}
          hide={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md={6} style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Title:{props.noteBio.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Date:{props.noteBio.date}
            </Card.Subtitle>
            <Card.Text>Description:{props.noteBio.description}</Card.Text>
            <Button
              href="#"
              size="sm"
              style={{ backgroundColor: "pink", border: "none" }}
              onClick={handleShow}
            >
              Edit
            </Button>
            <Button
              href="#"
              size="sm"
              style={{
                backgroundColor: "pink",
                border: "none",
                marginLeft: "5px",
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Notebook;
