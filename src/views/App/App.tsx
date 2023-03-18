import React from 'react';
import '../../App.css';
import Menu from '../../Components/Bar/MenuBar';
import Header from "../../Components/OldHeader/OldHeader";
import ToDo from "../../Components/TD/ToDo";
const App:React.FC = ()=> {
  return (
    <div className="App">
        <Header/>
        <Menu/>
        <ToDo/>
    </div>
  );
}

export default App;
