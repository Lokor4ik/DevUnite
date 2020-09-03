import React from 'react';
import Alert from '../components/commons/Alert/Alert';

const MainLayout = ({ children }) => {
  return (
    <section className="pages-wrapper">
      <Alert />

      {children}
    </section>
  );
}

export default MainLayout;
