import { createElement, Fragment } from 'react';

import './style.scss'

function Button(props) {
  return <button>{props.text}</button>
}

function App() {
  //JSX olmasaydi
  const todos = ['todo1', 'todo2', 'todo3'];
  const searchFunction = () => {
    alert('search');
  };
  const name = 'Goktug';
  const surname = 'Yeşil';
  
  // import { createElement } from 'react'; //bu importu yukarda yaptik

  const h1 = createElement('h1', null, 'React App');
  const ul = createElement('ul', null, todos.map((todo) => createElement('li', null, todo)));
  const button = createElement(Button, {
    text: 'Merhaba Butonu'
  }, null);
  return createElement('main',{
    className: 'test',
    id: 'main'
  }, h1, ul, button)


  //JSX ile
  //camelCase 
  // Fragment yerine <> </> kullanilabilir  // import { Fragment } from 'react';
  return (
    <Fragment id='main' className='test'>
      <Button text='Merhaba Butonu' />

      <h1 style={{color: 'red', backgroundColor: '#ccc'}} tabIndex="1">React App</h1>
      <label htmlFor='search' tabIndex="3" onClick={searchFunction}>Arama</label>
      <input type="text" id='search' tabIndex="2"/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>

        ))}
      </ul>
      {name + ' ' + surname === 'Goktug Yeşil'  ? <h1>Goktug Yesil (Admin)</h1> : name + ' ' + surname}
    </Fragment>
  );

}

export default App;
