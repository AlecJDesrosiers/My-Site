export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Blah Blah Blah</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first tab">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second tab">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third tab"> Tab 3 </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
