'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, useEffect } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  // Dynamically apply theme class
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'; // Default to light theme
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <ThemeProvider value={{ light: 'light', dark: 'dark' }}>{children}</ThemeProvider>
  );
}
