'use client'
import { useEffect, useState } from 'react'

export default function Projects() {
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        let ignore = false

        async function fetchProjects() {
            if (!ignore) {
                
            }
        }
        fetchProjects()

        return () => {
            ignore = true
        }
    }, [])

    return (
        <main className='flex flex-col max-h-full items-center py-8'>
            <div className='w-11/12 max-h-full bg-white rounded-3xl px-8 py-8'>
                <div className='flex flex-row items-center'>
                    <h1 className='text-2xl text-left font-bold'>Projects</h1>
                    <div className='ml-auto flex space-x-3'>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-xl text-white'>Refresh</button>
                        <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-xl text-white'>+ Create</button>
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
        </main>
    )
}