import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { PlusIcon } from "@heroicons/react/outline";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const handleRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div
          className="border-2 border-gray-300 rounded-md p-4 my-4 mx-auto w-full text-center cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <PlusIcon className="h-6 w-6 text-gray-400" />
            <span className="text-gray-400">
              Drag and drop files here, or click to select files
            </span>
          </div>
          <div className="flex flex-wrap mt-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 rounded-md p-2 mr-2 mb-2"
              >
                <div className="text-gray-400">
                  {file.name} ({file.size} bytes)
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
      )}
    </Dropzone>
  );
};

export default FileUpload;
