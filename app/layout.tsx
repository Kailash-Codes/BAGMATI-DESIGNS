import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from './providers/QueryProvider';

export const metadata: Metadata = {
  title: 'BAGMATI DESIGNS - Next.js TypeScript Demo',
  description: 'Production-ready Next.js with TypeScript, Tailwind CSS, React Hook Form, Zod, and React Query',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div className="min-h-screen">
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <h1 className="text-3xl font-bold text-primary">
                  BAGMATI DESIGNS
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Next.js • TypeScript • Tailwind • React Query • Axios
                </p>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
