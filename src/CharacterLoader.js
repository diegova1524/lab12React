import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SearchForm from './SearchForm';

const CharacterLoader = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCharacters = (query) => {
    setLoading(true);

    axios
      .get(`https://swapi.dev/api/people/?search=${query}`)
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCharacters('');
  }, []); // Load characters on component mount

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Personajes de Star Wars</h1>
      <SearchForm onSearch={loadCharacters} />

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {characters.map((character, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <strong>Género:</strong> {character.gender}<br />
                  <strong>Año de nacimiento:</strong> {character.birth_year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {loading && (
        <div className="text-center mt-3">
          <p>Cargando...</p>
        </div>
      )}

      {!loading && characters.length === 0 && (
        <div className="text-center mt-3">
          <p>No se encontraron personajes.</p>
        </div>
      )}

      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => loadCharacters('')}>
          CARGAR PERSONAJES
        </Button>
      </div>
    </Container>
  );
};

export default CharacterLoader;
