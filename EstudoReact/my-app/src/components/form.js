import React, { useState } from 'react';

function Form() {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  function enviar() {
    console.log(nome);
    console.log(password);
  }

  return (
    <>
      <h1 className='h1 display-1 mb-3'>Cadastro!</h1>
      <div className='container'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
          <input type="text" className="form-control" name='nome' onChange={(e) => setNome(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Senha</span>
          <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
      </div>
      <button className='btn btn-dark mx-auto' style={{ maxWidth: "30vw" }} onClick={enviar}>Cadastrar</button>
    </>
  );
}

export default Form;
