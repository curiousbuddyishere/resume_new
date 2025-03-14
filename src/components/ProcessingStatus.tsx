import React from 'react';
import { Loader2 } from 'lucide-react';
import type { UploadState } from '../types';

interface ProcessingStatusProps {
  state: UploadState;
}

export function ProcessingStatus({ state }: ProcessingStatusProps) {
  if (state.status === 'idle') return null;

  const statusMessages = {
    uploading: 'Uploading video...',
    processing: 'Extracting menu items...',
    complete: 'Processing complete!',
    error: 'Error: ' + state.error
  };

  const message = statusMessages[state.status];
  const isLoading = state.status === 'uploading' || state.status === 'processing';

  return (
    <div className="flex items-center space-x-3">
      {isLoading && (
        <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
      )}
      <span className={`
        text-sm font-medium
        ${state.status === 'complete' ? 'text-green-600' : ''}
        ${state.status === 'error' ? 'text-red-600' : ''}
        ${isLoading ? 'text-blue-600' : ''}
      `}>
        {message}
      </span>
      {isLoading && (
        <span className="text-sm text-gray-500">
          {Math.round(state.progress)}%
        </span>
      )}
    </div>
  );
}