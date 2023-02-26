import { createElement } from 'react';

import './style.scss'

function App() {
  //JSX olmasaydi

  // import { createElement } from 'react'; //bu importu yukarda yaptik
  const todos = ['todo1', 'todo2', 'todo3'];
  const h1 = createElement('h1', null, 'React App');
  const ul = createElement('ul', null, todos.map((todo) => createElement('li', null, todo)));
  return createElement('main',{
    className: 'test',
    id: 'main'
  }, h1, ul)

  //JSX ile
  return (
    <main id='main' className='test'>
      <h1>React App</h1>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>

        ))}
      </ul>
    </main>
  );

}

export default App;
