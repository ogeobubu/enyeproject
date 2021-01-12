import { Container } from "react-bootstrap";

const Footer = () => {
  let today = new Date(),
    year = today.getFullYear();
  return (
    <footer className="text-center">
      <Container>
        <p>®All Rights Reserved, {year} Project by Oge Obubu</p>
      </Container>
    </footer>
  );
};

export default Footer;
