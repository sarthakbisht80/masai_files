import React, { useContext } from 'react'
import ChildC from './ChildC'
import UserContext from '../Context/User';
const ChildB = () => {

      const Userdata = useContext(UserContext);
  return (
    <>
    
    <h2>this is child A  data is  {Userdata}</h2>

    <ChildC/>
    </>
  )
}

export default ChildB
// import React, { useContext } from 'react';
// import ChildC from './ChildC';
// import UserContext from '../Context/User';

// const ChildB = () => {
//   const userData = useContext(UserContext); // ✅ Hook must be inside the component

//   return (
//     <>
//       <h2>This is Child B — data is: {userData}</h2> 
//       <ChildC /> {/*render next child */}
//     </>
//   );
// };

// export default ChildB;
