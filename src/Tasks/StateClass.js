// import React, { Component } from 'react';

// class App extends React.Component {  
//  constructor() {  
//       super();        
//       this.state = { displayBio: true };  
//       }  
//       render() {  
//           const bio = this.state.displayBio ? (  
//               <div>  
//                   <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
//             </div>  
//               ) : null;  
//               return (  
//                   <div>  
//                       <h1> Welcome to JavaTpoint!! </h1>  
//                       { bio }   
//                   </div>  
//               );  
//      }  
// }  
// export default App;  

import React, { useState } from 'react';

const App = () => {
  const [displayBio, setDisplayBio] = useState(true);

  return (
    <div>
      <h1>Welcome to JavaTpoint!!</h1>
      {displayBio && (
        <div>
          <p><h3>Javatpoint is one of the best Java training institutes in Noida, Delhi, Gurugram, Ghaziabad, and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>
        </div>
      )}
    </div>
  );
};

export default App;
