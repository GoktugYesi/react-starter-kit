import { createElement, Fragment, useState } from 'react';
import './tailwind.css'
import Button from './components/Button';
import Tab from './components/Tab'


function App() {
  //JSX olmasaydi
  const todos = ['todo1', 'todo2', 'todo3'];
  const searchFunction = () => {
    alert('search');
  };
  const name = 'Goktug';
  const surname = 'Yeşil';

  const [activeTab, setActiveTab] = useState(1)
  
  // import { createElement } from 'react'; //bu importu yukarda yaptik
/*
  const h1 = createElement('h1', null, 'React App');
  const ul = createElement('ul', null, todos.map((todo) => createElement('li', null, todo)));
  const button = createElement(Button, {
    text: 'Merhaba Butonu'
  }, null);
  return createElement('main',{
    className: 'test',
    id: 'main'
  }, h1, ul, button)
*/

  //JSX ile
  //camelCase 
  // Fragment yerine <> </> kullanilabilir  // import { Fragment } from 'react';
  return (
    <Fragment id='main' className='test'>
      <div style={{padding:20}}>
      <Button text="Buton ornegi" variant="success"/>
      <Button text="Buton ornegi" variant="danger"/>
      <Button text="Buton ornegi" variant="warning"/>
      <Button text="Buton ornegi" />
      </div>
      <h1 style={{color: 'red', backgroundColor: '#ccc'}} tabIndex="1">React App</h1>
      <label htmlFor='search' tabIndex="3" onClick={searchFunction}>Arama</label>
      <input type="text" id='search' tabIndex="2"/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>

        ))}
      </ul>
      {name + ' ' + surname === 'Goktug Yeşil'  ? <h1>Goktug Yesil (Admin)</h1> : name + ' ' + surname}
      
      <div style={{padding: 20}}>
        <button onClick={() => setActiveTab(2)}>
          Aktif tab degistir
        </button>
        <Tab activeTab={activeTab}>
          <Tab.Panel title="Profil">Tab 1</Tab.Panel>
          <Tab.Panel title="Hakkinda">Tab 2</Tab.Panel>
          <Tab.Panel title="Iletisim">Tab 3</Tab.Panel>
        </Tab>
      </div>
    </Fragment>
  );

}

export default App;
