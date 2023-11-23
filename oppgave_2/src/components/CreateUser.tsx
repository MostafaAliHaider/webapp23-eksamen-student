"use client"


import { User } from "@/types/User";
import React, { useEffect, useState } from "react"



const CreateUser = () => {
  async function fetchUserData(): Promise<User[]> {
    try {
      const response = await fetch('https://webapp-api.vercel.app/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: User[] = await response.json();
      return data;
    } catch (error) {
      console.error('Fetching error', error);
      return [];
    }
  }

  
    async function displayUserData() {
      try {
        const userData = await fetchUserData();
        console.log(userData);
      } catch (error) {
        console.error('User data display error:', error);
      }
    }

    displayUserData();
  

  return <div>CreateUser component content...</div>; // Replace this with your component UI
};

export default CreateUser;



//react.fc is a datatype that is used to represent a react component function
//'src: https://medium.com/@RobertoSilvaZ/when-should-i-use-jsx-element-or-react-fc-29e61eb1e754
// const CreateUser: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);

  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("https://webapp-api.vercel.app/api/users");
//         if (!response.ok) {
//           throw new Error("Could not fetch customer");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     }
  
//     fetchData(); // Call the function
//   }, []);
  
//   return (
//     <div>
//     <h1>User Data</h1>
//     <ul>
//       {users.map((user, index) => {
//         console.log(users);
        
//         return (
//           <li key={index}>
//             <h2>jdjd</h2>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
//   )
// }

// export default CreateUser

// //the handles below are triggerd by the onChange and are using the setUser function to update the userState
//   //They also make a new user object by spreading the previous state and updating only relevant property based on the users input.
//   // const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setUser((prevUser) => ({
//   //     ...prevUser,
//   //     id: e.target.value,
//   //   }))
//   // }

//   // const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setUser((prevUser) => ({
//   //     ...prevUser,
//   //     gender: e.target.value,
//   //   }))
//   // }

//   // const handleSport = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setUser((prevUser) => ({
//   //     ...prevUser,
//   //     sport: e.target.value,
//   //   }))
//   // }

//   // const handleSubmit = () => {
//   //   console.log("New user:", user)
//   // }
//   return (
    
//     // <div className="flex flex-col items-center">
//     //   <label>Id:
//     //   <input type="text" value={user.id} onChange={handleId} />
//     //   </label>
//     //   <label>Gender:
//     //   <input type="text" value={user.gender} onChange={handleGender}/>
//     //   </label>
//     //   <label>Sport:
//     //   <input type="text" value={user.sport} onChange={handleSport} />
//     //   </label>
//     //   <button onClick={handleSubmit}>Create User</button>
//     // </div>
//   )






 // async function fetchSession() {
    //   try {
    //     const response = await fetch (
    //       "https://webapp-api.vercel.app/api/users"
    //     )
    //     if (!response.ok) {
    //       throw new Error("Could not fetch sessions");
    //     }
    //     const data = await response.json();
    //     setSessions(data);
    //   } catch (error) {
    //     console.log("Error fetching sessions:", error);
    //   }
    // }

   
    // fetchCustomer();
    // fetchSession();