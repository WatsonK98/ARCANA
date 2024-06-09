'use client'
import { useState, useRef } from 'react'

export default function Events() {
    const [ createForm, setCreateForm ] = useState()
    const createDialogRef = useRef<HTMLDialogElement | null>(null)

    const handleCreate = () => {

    }

    return (
        <main className='flex flex-col max-h-full items-center py-8'>
            <div className='w-11/12 max-h-full bg-white rounded-3xl px-8 py-8'>
                <div className='flex flex-row items-center'>
                    <h1 className='text-3xl text-left font-bold'>Events</h1>
                    <div className='ml-auto flex space-x-3'>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-xl text-white'>Refresh</button>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-xl text-white' onClick={() => createDialogRef.current?.showModal()}>+ Create</button>
                    </div>
                </div>
                <hr className='my-4 border-black border-t-2' />
                <table className='table w-full table-fixed'>
                    <thead className='bg-slate-300 border-b-2 border-slate-500'>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Location</th>
                            <th>Initials</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-200 overflow-y-auto'>
                    </tbody>
                </table>
            </div>

            {/** Create Project dialog */}
            <dialog 
                className='px-6 py-4 rounded-2xl backdrop:bg-black/60'
                ref={createDialogRef}
            >
                <h1 className='font-bold text-2xl'>Create Event</h1>
                <hr className='my-4 border-black border-t-2' />
                <form className='flex flex-col justify-center'>
                    <label className='font-bold text-lg mb-2'>
                        Name
                    </label>
                    <input
                        className='bg-gray-300 hover:border-black mb-4 px-4 py-2 rounded'
                        placeholder='Name'
                    >
                    </input>
                    <label className='font-bold text-lg mb-2'>
                        Location
                    </label>
                    <input
                        className='bg-gray-300 hover:border-black mb-4 px-4 py-2 rounded'
                        placeholder='Location'
                    >
                    </input>
                    <div className='flex-row'>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 mr-2 rounded-xl text-white'>
                            Create
                        </button>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-xl text-white'>
                            Cancel
                        </button>
                    </div>
                </form>
            </dialog>

            {/** Delete Project dialog */}

            {/** Edit Project dialog */}

        </main>
    )
}