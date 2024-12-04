import React from 'react';
import { Merge, Scissors, FileDown } from 'lucide-react';

export function PDFOperations() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">PDF Operations</h2>
      <div className="grid grid-cols-3 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Merge size={20} />
          Merge PDFs
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Scissors size={20} />
          Split PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <FileDown size={20} />
          Compress PDF
        </button>
      </div>
    </div>
  );
}