// Dashboard.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import Layout from "../../components/ui/Layout";
import { useUser } from "../../context/userContext";
import loginSuccess from "../../assets/login-success.jpg";
import StartQuiz from "@/components/StartQuiz.tsx/StartQuiz";

const Home = () => {
  const { userData } = useUser();

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h2 className="display-4">{`Welcome ${userData?.name}, you are successfully authenticated!`}</h2>
              <h3 className="lead">
                You are now logged in and authenticated to explore and interact
                with EYWA features using GraphQL.
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="text-center">
              <Image
                src={loginSuccess}
                alt="Placeholder Image"
                className="img-fluid"
                style={{ maxWidth: "700px" }}
              />
            </div>
            <StartQuiz />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
