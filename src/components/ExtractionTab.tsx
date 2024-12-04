import React, { useState } from 'react';
import type { ExtractionConfig } from '../types';

export function ExtractionTab() {
  const [config, setConfig] = useState<ExtractionConfig>({
    option: 'entire',
    format: 'markdown',
  });

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Extraction Options</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={config.option === 'entire'}
                onChange={() => setConfig({ ...config, option: 'entire' })}
              />
              <span>Entire Document/Pool</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={config.option === 'pages'}
                onChange={() => setConfig({ ...config, option: 'pages' })}
              />
              <span>Specific Pages</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={config.option === 'text'}
                onChange={() => setConfig({ ...config, option: 'text' })}
              />
              <span>Specific Text</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Output Format</h3>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={config.format}
            onChange={(e) => setConfig({ ...config, format: e.target.value as ExtractionConfig['format'] })}
          >
            <option value="markdown">Markdown</option>
            <option value="text">Plain Text</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          Extract Information
        </button>

        <div>
          <h3 className="text-sm font-medium mb-2">Preview</h3>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-500">
            Preview not available for entire document extraction
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Extracted Information</h3>
          <textarea
            className="w-full h-32 p-3 border border-gray-200 rounded-md text-sm"
            placeholder="Extracted text will appear here"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}