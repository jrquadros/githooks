import React, { useState, useEffect } from 'react';

export default function App() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/jrquadros/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  function handleFavorit(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: true} : repo
    });

    setRepositories(newRepositories);
  }

  return (

    <ul>
     {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorit(repo.id)}>Favoritar</button>
        </li>
     ))}
    </ul>

  )
}
