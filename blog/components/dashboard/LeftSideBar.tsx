import Link from 'next/link'
import React from 'react'

export default function LeftSideBar() {
    return (
        <div className='h-screen flex flex-col gap-4 bg-gray-100 w-2/12'>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/collections">Collections</Link>
            <Link href="/dashboard/categories">Categories</Link>
        </div>
    )
}
