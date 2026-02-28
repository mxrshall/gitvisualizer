import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";

export default function History({ data, onSelectCommit }) {
  const gitgraphOptions = {
    template: templateExtend(TemplateName.Metro, {
      colors: ["#FF5F5F", "#BE50F4", "#3DD6AF", "#F4B942", "#5A9CFF", "#DD7B97"],
      branch: {
        lineWidth: 2,
        spacing: 30,
        label: { display: false },
      },
      commit: {
        spacing: 60,
        dot: { size: 10 },
        message: {
          display: true,
          displayAuthor: false,
          displayHash: false,
        },
      },
    }),
  };

  return (
    <div className="w-full h-auto bg-black px-2 py-5 overflow-x-auto whitespace-nowrap">
      <Gitgraph options={gitgraphOptions}>
        {(gitgraph) => {
          const activeBranches = {};

          data.commits.forEach((commitData) => {
            const branchName = commitData.branch;
            if (!activeBranches[branchName]) {
              if (Object.keys(activeBranches).length === 0) {
                activeBranches[branchName] = gitgraph.branch(branchName);
              } else {
                const branchInfo = data.branches.find(
                  (b) => b.name === branchName
                );
                const baseBranchName = branchInfo?.base || "main";

                activeBranches[branchName] = gitgraph.branch({
                  name: branchName,
                  from: activeBranches[baseBranchName],
                });
              }
            }
            activeBranches[branchName].commit({
              subject: commitData.title,
              onClick: () => onSelectCommit(commitData),
              renderMessage: () => (
                <g
                  transform="translate(25, 0)"
                  onClick={() => onSelectCommit(commitData)}
                  style={{ cursor: "pointer" }}
                >
                  <rect width="220" height="40" fill="transparent" />

                  <text
                    fill="white"
                    fontSize="16"
                    fontWeight="500"
                    dominantBaseline="middle"
                  >
                    {commitData.title.length > 25 ? commitData.title.substring(0, 25) + "..." : commitData.title}
                  </text>

                  <g transform="translate(0, 15)">
                    <rect width="70" height="18" rx="4" fill="#272727" />
                    <text
                      x="35"
                      y="9"
                      fill="#9ca3af"
                      fontSize="11"
                      fontFamily="monospace"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {commitData.id}
                    </text>
                  </g>
                </g>
              ),
            });
          });
        }}
      </Gitgraph>
    </div>
  );
}