import './App.css';
import Name from './Components/Name'
import Title from './Components/Title'
import Texto from './Components/Texto'
import Item from './Components/Item'
import Button from './Components/Button'
import Form from './Components/Form'
import Evento from './Components/Evento';
import Condicional from './Components/Condicional';
import Lista from './Components/Lista';
import { useState } from 'react';
import SeuNome from './Components/SeuNome';
import Saudacao from './Components/Saudacao';

function App() {

  const nome = "Quintas"
  const meuItens = ["JavaScript", "PHP", "Java", "C++"]
  const [name, setName] = useState()

  return (
    <>
      <div className="App">
        <Title />
        <Name nome='Eliude Quintas' />
        <Name nome={nome}/>
        <Texto />
      </div>
    <hr/>
      <div>
        <h1>Texto</h1>
      </div>
      <hr/>
      <div className='App'>
        <ul>
          <Item fruta="Maçã" anoLancamento={2004}/>
          <Item fruta="Banana" anoLancamento={2004}/>
          <Item fruta="Pera" anoLancamento={2004}/>
          <Item fruta="Uva" anoLancamento={2004}/>
        </ul>
      </div>
      <hr/>
      <div>
        <Button />
      </div>
      <hr/>
      <div className='App'>
        <Form />
      </div>
      <hr/>
      <div className='App'>
        <Evento />
      </div>
      <hr/>
      <div className='App'>
        <Condicional />
      </div>
      <hr />
      <div className='App'>
        <Lista itens={meuItens}/>
        <Lista itens={[]}/>
      </div>

      <hr />
      <div className='App'>
        <SeuNome setName={setName}/>
        <Saudacao otherNome={name}/>
      </div>
    </>
  );
}

export default App;
