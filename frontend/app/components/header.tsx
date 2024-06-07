'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname()

    if(pathname == '/') {
        return (
            <nav className='flex items-center m-w-screen bg-black px-4 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
                <div className='ml-auto text-white'>
                    <p>Analyst:</p>
                </div>
            </nav>
        )
    } else if(pathname == '/dashboard/project') {
        return (
            <nav className='bg-black px-4 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li>
                        <Link href='/dashboard/project/events'>Events</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/project/graph'>Graph</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
            </nav>
        )
    } else if(pathname == '/dashboard/project/events') {
        return (
            <nav className='bg-black px-4 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li>
                        <Link href='/dashbaord/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/project/graph'>Graph</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
            </nav>
        )
    } else if (pathname == '/dashbaord/project/graph') {
        return (
            <nav className='bg-black px-4 py-2'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
                <ul className='flex space-x-4 ml-4 text-white font-semibold hover:underline'>
                    <li>
                        <Link href='/dashbaord/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/project/events'>Events</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/activity-log'>Activity Log</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}