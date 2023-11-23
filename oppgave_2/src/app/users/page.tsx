//import CreateUser from "@/components/CreateUser";


import { Data, User } from "@/types/User"

async function fetchUserData(): Promise<User[]> {
  try {
    const response = await fetch("https://webapp-api.vercel.app/api/users")
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data: User[] = await response.json()
    return data
  } catch (error) {
    console.error("Fetching error", error)
    return []
  }
}

 export default async function Page() {
  const userData = await fetchUserData();
  
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {userData.map((user:User , index) => {
          console.log(user)
          return (
            <li key={index}>
              <h2>{user.id}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


  

