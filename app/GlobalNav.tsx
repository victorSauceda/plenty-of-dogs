'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <>
    <ul className='flex'>
      <li className='p-5'><Link href='/'>Pupster</Link></li>
      <li className='p-5'><Link href='/'>About</Link></li>
      <li className='p-5'><Link href='/discover'>Discover</Link></li>
      <li className='p-5'><Link href='/search'>Search</Link></li>
    </ul>
    </>
  );
}
