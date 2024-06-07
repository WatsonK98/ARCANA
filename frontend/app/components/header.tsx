
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname()

    if(pathname == '/')
    return (
        <nav className='bg-black px-4 py-2'>
            <Image
                src="/devcom.png"
                width={168}
                height={56}
                alt='DEVCOM logo'
            />
        </nav>
    )
}