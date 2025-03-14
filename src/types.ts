export type Marketplace = 'Swish' | 'Talabat' | 'Zepto' | 'Bistro';

export interface UploadState {
  status: 'idle' | 'uploading' | 'processing' | 'complete' | 'error';
  progress: number;
  error?: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  category?: string;
}

export interface ProcessingResult {
  items: MenuItem[];
  marketplace: Marketplace;
  timestamp: string;
}