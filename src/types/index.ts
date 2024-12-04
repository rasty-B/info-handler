export interface PDFFile {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export type ExtractionOption = 'entire' | 'pages' | 'text';
export type OutputFormat = 'markdown' | 'text' | 'json';

export interface ExtractionConfig {
  option: ExtractionOption;
  format: OutputFormat;
  pages?: string; // For specific pages option
  text?: string; // For specific text search
}