export default function Navbar({ repos }) {
  return (
    <div className="w-full h-[10vh] bg-black p-5 flex flex-col items-center justify-center gap-2">
      <select className="w-5/6 h-[50px] rounded-lg px-3 bg-[#272727] text-white border border-[#2f2f2f]">
        {repos.map((repo) => (
          <option key={repo.id} value={repo.id}>
            {repo.name}
          </option>
        ))}
      </select>
    </div>
  )
}