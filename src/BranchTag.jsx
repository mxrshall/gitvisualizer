export default function BranchTag({ name }) {
  return (
    <div className="w-fit h-fit flex justify-center items-center bg-[#272727] rounded-lg px-5 py-1 text-lg text-white">
        <div className="w-[10px] h-[10px] rounded-full mr-3 bg-blue-600"/>
        {name}
    </div>
  )
}