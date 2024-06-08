'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const [ initials, setInitials ] = useState('')
    const pathname = usePathname()

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects'},
        { path: '/project/events', label: 'Events' },
        { path: '/project/graph', label: 'Graph' },
        { path: '/activity-log', lavel: 'Activity Log' },
        { path: '/settings', label: 'Settings'}
    ]

    const visibleLinks = {
        '/': [ '/activity-log', '/settings' ],
        '/projects': [ '/', '/activity-log', '/settings' ],
        '/project/events': [ '/', '/projects', '/project/graph', '/activity-log', '/settings' ],
        '/project/graph': [ '/', '/projects', '/project/events', '/activity-log', '/settings' ],
    }
    
    return (
        <nav className='flex items-center justify-between w-full bg-black px-8 py-2'>
            <Link href='/'>
                <Image
                    src="/devcom.png"
                    width={168}
                    height={56}
                    alt='DEVCOM logo'
                />
            </Link>
            {pathname === '/' && 
                <ul className='flex flex-shrink-0 space-x-4 text-white font-semibold'>
                    <li className='hover:underline'>
                        <Link href='activity-log'>Activity Log</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href='settings'>Settings</Link>
                    </li>
                </ul>
            }
            <div className='ml-4 text-white font-semibold text-lg'>
                {initials && <p>{initials}</p>}
                {!initials && <p>No Initials</p>}
            </div>
        </nav>
    )
}