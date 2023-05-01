import React from 'react';
import { Header } from '../index';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
