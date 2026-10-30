import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:"Bijaya's 27th — A little wall of love",description:'Leave a birthday wish, share a memory, and celebrate Bijaya’s 27th birthday.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
