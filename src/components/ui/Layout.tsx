import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import eywaLogo from "../../assets/eywa.png";
import reactLogo from "../../assets/react.svg";
import arrow from "../../assets/two-way-arrow.png";
import { useUser, useUserDispatch } from "@/context/userContext";
import "../../styles/core.css";
import StartQuiz from "../StartQuiz.tsx/StartQuiz";

const Layout = ({ children }) => {
  const dispatch = useUserDispatch();
  const { token } = useUser();
  return (
    <div>
      <Navbar color="light">
        <Container>
          <NavbarBrand href={`${import.meta.env.BASE_URL}home`}>
            <img
              alt="logo"
              src={reactLogo}
              style={{
                height: 40,
                width: 40,
                marginRight: 5,
              }}
            />
            <img
              alt="logo"
              src={arrow}
              style={{
                height: 40,
                width: 40,
              }}
            />
            <img
              alt="logo"
              src={eywaLogo}
              style={{
                height: 40,
                width: 80,
                marginLeft: 5,
              }}
            />
          </NavbarBrand>
          {token && (
            <NavbarBrand
              href={`${import.meta.env.BASE_URL}`}
              onClick={() => dispatch({ type: "logout" })}
            >
              LOGOUT
            </NavbarBrand>
          )}
        </Container>
      </Navbar>
      <div className="main-content">
        <Container className="mt-5">
          {/* Main Content */}
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Layout;
