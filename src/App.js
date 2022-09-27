import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddNotebook from "./components/AddNotebook";
import AllNotebook from "./components/AllNotebook";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  const [notebooks, setNotebooks] = useState([]);

  const addNewNotebooks = (item) => {
    item.id = Math.random().toString();
    setNotebooks([...notebooks, item]);
    // console.log(item);
  };

  const deleteNotebook = (id) => {
    setNotebooks(
      notebooks.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };

  const editNotebooks = (id, newNotes) => {
    setNotebooks(
      notebooks.map((item) => {
        if (item.id === id) {
          return newNotes;
        }
        return item;
      })
    );
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={6}>
          <AddNotebook newNotes={addNewNotebooks} />
        </Col>
        <Col md={6}>
          <AllNotebook
            noteBio={notebooks}
            editNote={editNotebooks}
            delete={deleteNotebook}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
