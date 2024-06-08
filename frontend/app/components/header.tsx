'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const [ initials, setInitials ] = useState('')
    const pathname = usePathname()

    if(pathname == '/') {
        return (
            <nav className='flex items-center justify-between w-full bg-black px-8 py-2'>
                <div className='nav-start'>
                    <Link href='/'>
                        <Image
                            src="/devcom.png"
                            width={168}
                            height={56}
                            alt='DEVCOM logo'
                        />
                    </Link>
                </div>
                <ul className='flex flex-shrink-0 self-center space-x-4 text-white font-semibold hover:underline'>
                    <li className='hover:underline'>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
                <div className='ml-4 text-white font-semibold text-lg'>
                    {initials && <p>{initials}</p>}
                    {!initials && <p>No Initials</p>}
                </div>
            </nav>
        )
    } else if(pathname == '/dashboard/project') {
        return (
            <nav className='bg-black px-8 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex flex-shrink-0 space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li className='hover:underline'>
                        <Link href='/dashboard/project/events'>Events</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/project/graph'>Graph</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
                <div className='ml-auto text-white font-semibold text-lg'>
                    {initials && <p>{initials}</p>}
                    {!initials && <p>No Initials</p>}
                </div>
            </nav>
        )
    } else if(pathname == '/dashboard/project/events') {
        return (
            <nav className='bg-black px-8 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex flex-shrink-0 space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li className='hover:underline'>
                        <Link href='/dashbaord/projects'>Projects</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/project/graph'>Graph</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
                <div className='ml-auto text-white font-semibold text-lg'>
                    {initials && <p>{initials}</p>}
                    {!initials && <p>No Initials</p>}
                </div>
            </nav>
        )
    } else if (pathname == '/dashbaord/project/graph') {
        return (
            <nav className='bg-black px-8 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex flex-shrink-0 space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li className='hover:underline'>
                        <Link href='/dashbaord/projects'>Projects</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/project/events'>Events</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
                <div className='ml-auto text-white font-semibold text-lg'>
                    {initials && <p>{initials}</p>}
                    {!initials && <p>No Initials</p>}
                </div>
            </nav>
        )
    } else if(pathname == '/dashboard/activity-log') {
        return (
            <nav className='flex items-center m-w-screen bg-black px-8 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex flex-shrink-0 space-x-4 ml-4 text-white font-semibold'>
                    <li className='hover:underline'>
                        <Link href='/'>Home</Link>
                    </li>
                    {initials && 
                        <li>
                            <Link href='dashboard/projects'>Projects</Link>
                        </li>}
                </ul>
                <div className='ml-auto text-white font-semibold text-lg'>
                    {initials && <p>{initials}</p>}
                    {!initials && <p>No Initials</p>}
                </div>
            </nav>
        )
    }
}