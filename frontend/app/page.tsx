'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [ initials, setInitials ] = useState('')
  const router = useRouter()

  const handleSubmit = () => {
    localStorage.setItem('initials', initials)
    router.push('/projects')
  }

  return (
    <main className="flex flex-col h-full items-center p-24">
      <form 
        className='flex flex-col h-64 items-center bg-white rounded-3xl py-16 px-8'
        onSubmit={handleSubmit}
      >
        <label className='font-bold text-xl mb-2'>User Initials</label>
        <input 
          className='hover:border-black mb-4 py-2 px-4 rounded bg-gray-300' 
          value={initials}
          onChange={e => setInitials(e.target.value.toUpperCase())}
          maxLength={2}
          type='text'
          placeholder='AA'
          required
        />
        {initials && (initials.length == 2) && (
        <button className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded'>Submit</button>
      )}
      </form>
    </main>
  );
}
