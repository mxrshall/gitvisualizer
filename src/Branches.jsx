import BranchTag from "./BranchTag";

export default function Branches({ data }) {
  return (
    <div className="w-full flex bg-black gap-2 p-3 border-t-2 border-b-2 border-[#2f2f2f] overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" >
      {data.branches.map((branch) => (
        <BranchTag name={branch.name} key={branch.name} />
      ))}
    </div>
  )
}