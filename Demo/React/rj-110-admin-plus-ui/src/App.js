import React from 'react';
import './App.css';
import ButtonFunction from './components/widgets/ButtonFunction.jsx';
import ButtonCmp from './components/widgets/ButtonCmp';
import ButtonCmpClass from './components/widgets/ButtonClass';
import FormsPage from './components/pages/01-Page/FormsPage';

function App() {
  return (
    <div className="default-text">
      hello from react
      <br/><FormsPage/>
    
    </div>
  );
}

export default App;
