'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <>
    <nav className='bg-neutral-100'>
    <ul className='flex text-slate-500'>
      <li className='p-5 hover:text-black'><Link href='/'>Pupster</Link></li>
      <li className='p-5 hover:text-black'><Link href='/'>About</Link></li>
      <li className='p-5 hover:text-black'><Link href='/discover'>Discover</Link></li>
      <li className='p-5 hover:text-black'><Link href='/search'>Search</Link></li>
    </ul>
    </nav>
    </>
  );
}
