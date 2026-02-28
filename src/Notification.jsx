import { useState } from "react"

export default function Notification() {
  const [open, setOpen] = useState(true)

  const text = "Notifkacia Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."

  return (
    <>
        {open && (
            <div className="w-full h-[100vh] bg-black/70 flex items-center justify-center z-50 absolute top-0 left-0" onClick={() => setOpen(false)}>
                <div className="w-full bg-[#272727] rounded-lg px-8 py-5 flex flex-col items-center justify-center mx-5" onClick={(e) => e.stopPropagation()}>
                    <p className="text-white text-xl mb-5">
                        {text}
                    </p>
                    <button className="rounded-lg py-2 px-5 bg-blue-600 text-white font-semibold" onClick={() => setOpen(false)}>Close</button>
                </div>
            </div>
        )}
    </>
  )
}