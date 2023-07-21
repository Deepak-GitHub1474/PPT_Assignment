import React from 'react';
import Person from "./Component/Person"
import Button from './Component/Button';
import Header from './Component/Header';
import List from './Component/List';

// Question- 1
// export default function App() {
//     return (
//         <div>
//             <Person
//                 name="Deepak"
//                 age={28}
//             />
//         </div>
//     );
// }

// +----------------------------------------+ //

// Question- 2
// export default function App() {

//   function onClick(){
//     alert("On click function called");
//   }

//   return (
//       <div>
//           < Button 
//             text = "Submit"
//             onClick = {onClick}
//           />
//       </div>
//   );
// }

// +----------------------------------------+ //

// Question- 3
// export default function App() {

//   return (
//     <div>
//       < Header
//           title = "Welcome to my portfolio"
//       />
//     </div>
//   );
// }


// +----------------------------------------+ //

// Question- 4
export default function App() {

  return (
    <div>
      < List
          items = {["Home", "About", "Contact", "Pricing"]}
      />
    </div>
  );
}
