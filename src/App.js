import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './containers/todo/Todo'
import Title from './components/title/Title'

function App() {
  return (
    <Fragment>
      <Title title='ToDo App'/>
      <ToDo/>
    </Fragment>
  );
}

export default App;
