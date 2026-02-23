import { useState } from "react";
import Navbar from "./Navbar";
import Branches from "./Branches";
import History from "./History";
import CommitInfo from "./CommitInfo";
import Login from "./Login";

export default function App() {
  const [selectedCommit, setSelectedCommit] = useState(null);

  const data = {
  "branches": [
    { "name": "main", "base": null },
    { "name": "feature-1", "base": "main" },
    { "name": "feature-2", "base": "main" }
  ],
  "commits": [
    {
      "id": "p7h2c6u",
      "branch": "main",
      "parents": [], 
      "title": "Another commit",
      "description": "Description of the commit.",
      "author": "John Doe",
      "date": "2025-09-01T12:00:00Z"
    },
    {
      "id": "z8x2c4d",
      "branch": "feature-1",
      "parents": ["e5f6g7h"], 
      "title": "Another commit",
      "description": "This is the commit of the project.",
      "author": "Jane Smith",
      "date": "2025-06-01T12:00:00Z"
    },
    {
      "id": "a1b2c3d",
      "branch": "main",
      "parents": [], 
      "title": "Another commit",
      "description": "This is the initial commit of the project.",
      "author": "John Doe",
      "date": "2024-06-01T12:00:00Z"
    },
    {
      "id": "e5f6g7h",
      "branch": "feature-1",
      "parents": ["a1b2c3d"],
      "title": "Add feature 1",
      "description": "Implemented the first feature of the project.",
      "author": "Jane Smith",
      "date": "2024-06-02T15:30:00Z"
    },
    {
      "id": "i9j0k1l",
      "branch": "feature-2",
      "parents": ["a1b2c3d"], 
      "title": "Add feature 2",
      "description": "Implemented the second feature of the project.",
      "author": "Alice Johnson",
      "date": "2024-06-03T10:45:00Z"
    },
    {
      "id": "a1b5cd",
      "branch": "main",
      "parents": [], 
      "title": "Initial commit",
      "description": "This is the initial commit of the project.",
      "author": "John Doe",
      "date": "2024-06-01T12:00:00Z"
    }
  ]
  }

  const repos = [
    {
      id: 1,
      name: "Repo 1",
    },
    {
      id: 2,
      name: "Repo 2",
    },
    {
      id: 3,
      name: "Repo 3",
    }
  ];
  return (
    <div className="w-full h-[100vh] bg-black relative">
      <Login />
      <Navbar repos={repos} />
      <div className="w-full flex flex-col">
        <Branches data={data} />
        <History data={data} onSelectCommit={setSelectedCommit} />
      </div>

      {selectedCommit && (
        <CommitInfo
          commit={selectedCommit}
          onClose={() => setSelectedCommit(null)}
        />
      )}
    </div>
  );
}
