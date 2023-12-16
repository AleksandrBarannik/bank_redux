import React from 'react';
import UserList from './components/UserList';
import TodoList from "./components/TodoList";




const App = ()=>
{
    return (
      <div className="App">
          <UserList/>
          <hr></hr>
          <TodoList/>
      </div>
    );
};

export default App;
