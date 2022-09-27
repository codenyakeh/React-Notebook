import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Notebook from "./Notebook";

function AllNotebook({ handleDelete, editNote }) {
  const { notebooks } = useSelector((store) => store);

  return (
    <Container>
      <Row>
        {notebooks.map((item, index) => {
          return (
            <Notebook
              key={index}
              noteBio={item}
              delete={handleDelete}
              editNote={editNote}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllNotebook;
