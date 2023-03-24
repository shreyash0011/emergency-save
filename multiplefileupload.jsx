import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Filter out files that exceed the size limit or have invalid file types
    const filteredFiles = acceptedFiles.filter(
      (file) => file.size <= 5 * 1024 * 1024 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "application/pdf")
    );
    
    if (filteredFiles.length < acceptedFiles.length) {
      toast.error("Some files were not added. Please make sure that the file types are JPG, PNG, or PDF and that the file size is no larger than 5 MB.");
    }
    
    setFiles([...files, ...filteredFiles]);
  };

  const handleRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div>
      <div className="border-2 border-gray-300 rounded-md p-4 my-4 mx-auto w-full text-center cursor-pointer">
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center space-y-2">
          <PlusIcon className="h-6 w-6 text-gray-400" />
          <span className="text-gray-400">
          CSR Document*
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={(e) => handleDrop(Array.from(e.target.files))}
          className="sr-only"
        />
        <div className="flex flex-wrap mt-4">
          {files.map((file, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-md p-2 mr-2 mb-2">
              <div className="text-gray-400">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-md p-4 my-4 mx-auto w-full text-center cursor-pointer">
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center space-y-2">
          <PlusIcon className="h-6 w-6 text-gray-400" />
          <span className="text-gray-400">
            for 12A Document
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={(e) => handleDrop(Array.from(e.target.files))}
          className="sr-only"
        />
        <div className="flex flex-wrap mt-4">
          {files.map((file, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-md p-2 mr-2 mb-2">
              <div className="text-gray-400">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-md p-4 my-4 mx-auto w-full text-center cursor-pointer">
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center space-y-2">
          <PlusIcon className="h-6 w-6 text-gray-400" />
          <span className="text-gray-400">
          80G Document
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={(e) => handleDrop(Array.from(e.target.files))}
          className="sr-only"
        />
        <div className="flex flex-wrap mt-4">
          {files.map((file, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-md p-2 mr-2 mb-2">
              <div className="text-gray-400">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default FileUpload;
