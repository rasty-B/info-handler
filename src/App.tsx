import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Settings } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { PDFOperations } from './components/PDFOperations';
import { PDFPreview } from './components/PDFPreview';
import { ExtractionTab } from './components/ExtractionTab';
import type { PDFFile } from './types';

function App() {
  const [files, setFiles] = useState<PDFFile[]>([]);

  return (
    <div className="flex h-screen">
      <Sidebar onFilesSelected={setFiles} />
      
      <div className="flex-1 flex flex-col">
        <header className="h-12 border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">PDF Manipulator</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} />
          </button>
        </header>

        <Tabs.Root defaultValue="pdfs" className="flex-1 flex flex-col">
          <Tabs.List className="border-b border-gray-200 px-6">
            <Tabs.Trigger
              value="pdfs"
              className="px-4 py-2 text-sm data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              PDFs
            </Tabs.Trigger>
            <Tabs.Trigger
              value="extraction"
              className="px-4 py-2 text-sm data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              Information Extraction
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="pdfs" className="flex-1 flex flex-col">
            <PDFOperations />
            <PDFPreview />
          </Tabs.Content>

          <Tabs.Content value="extraction" className="flex-1">
            <ExtractionTab />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default App;