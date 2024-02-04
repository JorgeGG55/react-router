import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam magni incidunt reiciendis
        ullam aut animi. Asperiores doloribus inventore perspiciatis id neque, vel alias! Odit sunt
        esse fuga cumque facilis.
      </p>
      <p>
        <span>Visita la página de heroes</span>
        <Link to="heroes"> Heroes</Link>
      </p>
    </>
  );
};

export default Home;
