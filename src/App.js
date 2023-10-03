import * as React from 'react';

function getTitle(title) {
  return title;
}

const toDoList = [
  {
    id: '1',
    title: 'Complete HW 1',
  },
  {
    id: '2',
    title: 'Pick up Sofia from GYM',
  },
  {
    id: '3',
    title: 'Read React book',
  },
  {
    id: '4',
    title: 'Relax',
  },
]

function App() {
  return (
    <div>
      <h1>Hello {getTitle('Todo list')}</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type="text" />

      <hr />

      <ul>
        {toDoList.map(function(item) {
          return (
            <li key={item.id}>
              {item.id} {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
