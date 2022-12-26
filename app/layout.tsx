import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Pupster App</title>
      </head>
      <body className="">
        <div className="">
          <div className="col-start-2">
            <GlobalNav />
          </div>
            <div className="">
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
