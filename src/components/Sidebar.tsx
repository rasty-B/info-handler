import React from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import type { PDFFile } from '../types';

interface SidebarProps {
  onFilesSelected: (files: PDFFile[]) => void;
}

export function Sidebar({ onFilesSelected }: SidebarProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    onDrop: (files) => {
      const pdfFiles: PDFFile[] = files.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      }));
      onFilesSelected(pdfFiles);
    },
  });

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col gap-4">
      <div className="text-lg font-semibold">PDF Manager</div>
      
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-2" size={24} />
        <div className="text-sm text-gray-600">
          Upload PDFs
          <br />
          <span className="text-xs">or drag and drop PDF files here</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium text-gray-700">Input Folder</div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          Select input folder
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium text-gray-700">Output Folder</div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          Select output folder
        </button>
      </div>
    </div>
  );
}