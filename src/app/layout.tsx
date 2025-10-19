import type { Metadata } from 'next';
import '@/app/globals.css';

import StyledComponentsRegistry from '@/styled-components/registry';
import QueryProvider from '@/providers/query-provider';

export const metadata: Metadata = {
  title: 'qwq next starter',
  description:
    'A starter template for Next.js with TypeScript, Styled-Components, and React Query.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <QueryProvider>{children}</QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
