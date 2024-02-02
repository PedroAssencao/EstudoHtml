import React, { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/cards'
function App() {
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9adb7fe1c61d4d93a27752755e302301";
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const cards = data.articles.map((element, index) => (
          <Cards key={index} img={element.urlToImage} title={element.title} details={element.description} />
        ));
        setCardsData(cards);
      })
      .catch(error => {
        console.error("Erro na requisição:", error);
      });
  }, []); // Dependência vazia para garantir que o efeito seja executado apenas uma vez

  return (
    <div className='container-fluid'>
      <div className='row row-cols-1 row-cols-md-4 gap-3 justify-content-center align-itemns-center' id='teste1'>
        {cardsData}
      </div>
    </div>
  );
}

export default App;
