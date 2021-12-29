import React from 'react';
import homePageBg from './homePageBg.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Your Phonebook</h1>
    <img src={homePageBg} alt='Home Page' width='400' />
  </div>
);

export default HomePage;
