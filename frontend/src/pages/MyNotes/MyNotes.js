import React, { useEffect, useState } from "react";
import "./MyNotes.css";
import axios from "axios";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Card } from "react-bootstrap";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = () => {
    console.log("delete");
  };

  const fetchNotes = async () => {
    const notes = await axios.get("/api/notes/");
    setNotes(notes.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <MainScreen title="Welcome Back Prasaanth S.....">
        <button type="button" className="btn btn-primary create-new-button">
          <Link to="/create-note" style={{ textDecoration: "none" }}>
            Create New Note
          </Link>
        </button>

        {notes.map((note) => (
          <Accordion defaultActiveKey="0" className="my-4" key={note._id}>
            <Card>
              <Accordion.Header>
                <Card.Header>
                  <div className="note-card-header">
                    <h4 className="note-title">{note.title}</h4>
                    <div>
                      <Link to={`/note/${note._id}`}>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Card.Header>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <Badge variant="primary">Category - {note.category}</Badge>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      <cite>Created at date: 02/01/2019</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
