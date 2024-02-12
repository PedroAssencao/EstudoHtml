import React, { useState, useEffect } from 'react';
import Cards from './assets/Components/cards'
import { getApi } from './Hooks/GetApi';
function App() {
  const { data, isLoading } = getApi();
  // useEffect(() => {
  // }, []);

  return (
    <>
      {data && (
        <div className='container-fluid'>
          <h1 className='display-1 h1 mt-3 text-center'>Lista de Animes Com Naruto</h1>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-3 justify-content-center mt-5'>
            {!isLoading &&
              <>
                {data.map((item, index) => (
                  <Cards key={index}
                    img={item.Poster}
                    Title={item.Title}
                    descricao={item.Year} />
                ))}
              </>
            }
            {isLoading &&
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default App;
