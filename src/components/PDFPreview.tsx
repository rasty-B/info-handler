import React from 'react';

export function PDFPreview() {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="w-full h-[calc(100vh-12rem)] bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
        PDF preview will appear here
      </div>
    </div>
  );
}