'use client'
import { useState } from 'react'

export default function Home() {
  const [ initials, setInitials ] = useState('')

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form className='flex flex-col items-center'>
        <label className='font-bold text-xl'>User Initials</label>
        <input 
          className='hover:border-black py-2 px-4 rounded' 
          value={initials}
          onChange={e => setInitials(e.target.value)}
          maxLength={2}
          type='text'
          placeholder='AA'
          required
        />
        {initials && (initials.length == 2) && (
        <button className='bg-gray-500 hover:bg-gray-700 text-white m-2 py-2 px-4 rounded'>Submit</button>
      )}
      </form>
    </main>
  );
}
