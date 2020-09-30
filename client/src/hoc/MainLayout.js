import React from 'react';

const MainLayout = ({ children, sectionName }) => {
  return (
    <div className='pages-wrapper'>
      <section className={sectionName}>
        <div className='container'>
          {children}
        </div>
      </section>
    </div>
  );
}

export default MainLayout;
