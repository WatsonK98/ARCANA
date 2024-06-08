'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface MenuItem {
    path: string,
    label: string
}

export default function Header() {
    const [ initials, setInitials ] = useState('')
    const pathname = usePathname()

    const menuItems: MenuItem[] = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects'},
        { path: '/project/events', label: 'Events' },
        { path: '/project/graph', label: 'Graph' },
        { path: '/activity-log', label: 'Activity Log' },
        { path: '/settings', label: 'Settings'}
    ]

    const hiddenLinks: { [key: string]: string[] } = {
        '/': [ '/projects', '/project/events', '/project/graph' ],
        '/projects': [ '/project/events', '/project/graph' ],
        '/project/events': [ '/project/event' ],
        '/project/graph': [ '/project/graph' ],
        '/activity-log': [ '/project/events', '/project/graph', '/activity-log' ],
        '/settings': [ '/project/events', '/project/graph', '/settings' ]
    }

    const visibileMenuItems = menuItems.filter(item =>
        !hiddenLinks[pathname]?.includes(item.path)
    )

    useEffect(() => {
        const initialsValue = localStorage.getItem('initials')
        if(initialsValue) {
            setInitials(initialsValue)
        }
    }, [])
    
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
            <ul className='flex flex-shrink-0 space-x-4 text-white text-xl font-semibold'>
                {visibileMenuItems.map((item, index) => (
                    <li key={index} className='hover:underline'>
                        <Link href={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            <div className='ml-4 text-white font-semibold text-lg'>
                {initials && <p>Analyst: {initials}</p>}
                {!initials && <p>No Initials</p>}
            </div>
        </nav>
    )
}