import React from 'react';
import LangCtrl from './components/langCtrl.jsx'

class App extends React.Component {



   render() {
      return (
         <div>
             <div className="loginHeader">
                 <LangCtrl />
             </div>
             <div className="loginBody"></div>
             <p>This is the content!!!</p>
          </div>
      );
   }
}

export default App;