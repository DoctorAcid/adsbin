"use client";

import React from "react";
import { UploadButton } from "../components/Buttons";
import Header from "../components/Header";
import FileTable from "../components/Table";

const page = () => {
  const handleUploadNewFile = () => {
    console.log("uploading new files");
  };
  return (
    <div className="flex flex-col gap-8">
      {/* header */}
      <Header
        title="Images and Videos"
        desc="Upload your campaign imagery. Max 1GB per file. Video or audio files."
      >
        <UploadButton onClick={handleUploadNewFile}>
          Upload new File
        </UploadButton>
      </Header>

      <FileTable />
    </div>
  );
};

export default page;
