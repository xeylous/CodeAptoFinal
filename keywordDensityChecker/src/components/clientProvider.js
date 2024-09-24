"use client"; // This file can be client-side

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

export default function ClientProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
