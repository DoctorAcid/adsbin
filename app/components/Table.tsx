"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FileData {
  id: number;
  filename: string;
  type: string;
  size: string;
  status: string;
  action: string;
  thumbnail: string;
}

const files: FileData[] = [
  {
    id: 1,
    filename: "Poster of Big Bunny",
    type: "Image",
    size: "240Kb",
    status: "Uploaded",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 2,
    filename: "Chaw v1",
    type: "Image",
    size: "500Kb",
    status: "Uploaded",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 3,
    filename: "Final Clip",
    type: "Image",
    size: "2.4Mb",
    status: "Uploaded",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 4,
    filename: "Test Material",
    type: "Image",
    size: "480Mb",
    status: "Uploaded",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 5,
    filename: "Ad reel",
    type: "Image",
    size: "1.1Gb",
    status: "Uploaded",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 6,
    filename: "Budapest v.12",
    type: "Video",
    size: "440Kb",
    status: "Processing 24%",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
  {
    id: 7,
    filename: "Clip render",
    type: "Video",
    size: "240Kb",
    status: "Uploading 21%",
    action: "...",
    thumbnail: "/media/images/image1.png",
  },
];

const FileTable: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const filesPerPage = 5;

  // Filter files based on the search term
  const filteredFiles = files.filter((file) =>
    file.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalPages = Math.ceil(filteredFiles.length / filesPerPage);
  const startIndex = (currentPage - 1) * filesPerPage;
  const endIndex = startIndex + filesPerPage;
  const currentFiles = filteredFiles.slice(startIndex, endIndex);

  // Toggle selection for a single file
  const toggleSelection = (id: number) => {
    setSelectedFiles((prev) =>
      prev.includes(id) ? prev.filter((fileId) => fileId !== id) : [...prev, id]
    );
  };

  // Select or deselect all files on the current page
  const toggleSelectAll = () => {
    const currentFileIds = currentFiles.map((file) => file.id);
    if (currentFileIds.every((id) => selectedFiles.includes(id))) {
      setSelectedFiles((prev) =>
        prev.filter((id) => !currentFileIds.includes(id))
      );
    } else {
      setSelectedFiles((prev) => [...new Set([...prev, ...currentFileIds])]);
    }
  };

  // Handle page navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div className="overflow-x-auto">
      {/* top section */}
      <div className="flex justify-between items-center p-6 border-t border-lightGray">
        {/* selected media  */}
        <span className="text-sm text-secondary">
          {selectedFiles.length} files selected
        </span>
        {/* selected media action */}
        <div className="flex items-center space-x-2">
          {/* action button */}
          <button className="px-4 py-2 text-sm hover:text-primary transition-all ease-in-out duration-300">
            Apply to selection
          </button>
          {/* search bar */}
          <div className="flex relative items-center justify-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 text-sm border border-lightGray rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute mr-4 flex w-[18px] h-[18px] items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#415B41"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* main table */}
      <table className="min-w-full bg-white divide-y divide-lightGray">
        <thead className="">
          <tr>
            <th className="flex px-4 py-2">
              <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={
                      currentFiles.every((file) =>
                        selectedFiles.includes(file.id)
                      ) && currentFiles.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary outline-none"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-black">
              Filename
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-black">
              Type
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-black">
              Size
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-black">
              Status
            </th>
            <th className="px-4 py-2 text-right text-sm font-semibold text-black">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-lightGray">
          {currentFiles.map((file) => (
            <tr
              key={file.id}
              className="hover:bg-primary hover:bg-opacity-5 transition-all ease-in-out duration-300"
            >
              <td className="px-4 py-3 w-4">
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      checked={selectedFiles.includes(file.id)}
                      onChange={() => toggleSelection(file.id)}
                      className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary outline-none"
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </td>
              <td className="px-4 py-3 flex items-center space-x-3">
                <div className="relative flex w-10 h-10 items-center justify-center rounded overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={file.thumbnail}
                    alt={file.filename}
                    // className="w-10 h-10 rounded"
                  />
                </div>
                <div>
                  <h3 className="text-accent">{file.filename}</h3>
                  <p className="text-sm text-secondary">Lorem.png</p>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-secondary">{file.type}</td>
              <td className="px-4 py-3 text-sm text-secondary">{file.size}</td>
              <td className="px-4 py-3 text-sm text-secondary">
                {file.status}
              </td>
              <td className="px-4 py-3 text-right">
                <button className="text-secondary hover:text-black">
                  {file.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t border-lightGray">
        <span className="text-sm text-secondary">
          Page {currentPage} of {totalPages}
        </span>
        <nav className="flex space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 text-sm font-medium text-secondary bg-white cursor-pointer rounded hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all ease-in-out duration-300"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "text-secondary bg-white hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all ease-in-out duration-300"
              } rounded`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-3 py-1 text-sm font-medium text-secondary bg-white rounded hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all ease-in-out duration-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default FileTable;
