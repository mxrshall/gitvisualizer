export default function CommitInfo({ commit, onClose }) {
  return (
    <div className="w-full h-[100vh] bg-black/70 absolute top-0 left-0 flex justify-center items-end" onClick={onClose}>
      <div className="w-full bg-[#272727] p-5 rounded-xl max-h-[80vh] overflow-y-auto relative roundel-lg">

        <div className="w-full">
          <h1 className="text-2xl font-semibold text-white mt-3">
            {commit.title}
          </h1>
          <div className="w-full flex justify-start items-center my-3">
            <div className="w-[25px] h-[25px] bg-red-400 rounded-full flex justify-center items-center mr-3">
              {commit.author[0]}
            </div>
            <h1 className="text-base mr-2 text-[#b1b1b1]">
              {`${commit.author} committed on ${commit.branch}`}
            </h1>
          </div>
        </div>
        <p className="text-[#b1b1b1] text-lg">
          {commit.description}
        </p>
      </div>
    </div>
  );
}