import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  const projectsData = [
    {
      title: 'Mobile Application for food ordering and community food delivery services',
      technology: 'Technologies Used : Dart (Flutter) for mobile app development, Python for web development, and Firebase (Firestore, Authentication, Storage) for backend service',
      description: 'A mobile application that allows users to order food within their community while promoting local economic growth and increasing community income.',
    },
    {
      title: 'Mini Project : Webboard',
      technology: 'Technologies Used : PHP for server-side scripting, HTML for the user interface, and phpMyAdmin for database management',
      description: 'Developed a web-based forum for user discussions with features for creating posts, commenting, and user authentication.',
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2>My Projects</h2>
        <Row className="justify-content-center">
          {projectsData.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="technology">{project.technology}</Card.Text>
                  <Card.Text className="description">{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;