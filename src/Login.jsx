import { useState } from "react"

export default function Login() {
  const [logged, setLogged] = useState(false)

  return (
    <div className="w-full bg-black py-5 px-3 flex items-center justify-start border-b-2 border-[#2f2f2f]">
        {!logged && (
          <button className="rounded-lg py-2 px-5 bg-blue-600 text-white font-semibold" onClick={() => setLogged(true)}>Login</button>
        )}
        {logged && (
          <div className="flex justify-center items-center">
            <div className="w-[40px] h-[40px] bg-orange-600 rounded-full"/>
            <h1 className="text-white text-xl font-semibold ml-2">John Doe</h1>
          </div>
        )}
    </div>
  )
}