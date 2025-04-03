// import { SignOutButton } from '@clerk/nextjs'
// import Link from 'next/link'
// import React from 'react'

// export default function LeftSideBar() {
//     return (
//         <div className='h-screen flex flex-col gap-4 bg-gray-100 w-2/12'>
//             <Link href="/dashboard">Dashboard</Link>
//             <Link href="/dashboard/collections">Collections</Link>
//             <Link href="/dashboard/categories">Categories</Link>
//             <Link href="/dashboard/profile">Profile</Link>
//             <div className='mt-auto bg-blue-400 px-8 py-2'>
//                 <SignOutButton redirectUrl='/sign-in'></SignOutButton>
//             </div>

//         </div>
//     )
// }

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { FaTachometerAlt, FaFolderOpen, FaTags, FaUser } from 'react-icons/fa';

export default function LeftSideBar() {
    return (
        <div className="h-screen flex flex-col bg-gray-800 text-white w-2/12 shadow-lg">
            {/* Logo Section */}
            <div className="p-4 text-center text-xl font-bold bg-gray-900">
                My Dashboard
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-4">
                <Link href="/dashboard">
                    <p className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors">
                        <FaTachometerAlt /> Dashboard
                    </p>
                </Link>
                <Link href="/dashboard/collections">
                    <p className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors">
                        <FaFolderOpen /> Collections
                    </p>
                </Link>
                <Link href="/dashboard/categories">
                    <p className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors">
                        <FaTags /> Categories
                    </p>
                </Link>
                <Link href="/dashboard/profile">
                    <p className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors">
                        <FaUser /> Profile
                    </p>
                </Link>
            </nav>

            {/* Sign Out Button */}
            <div className="mt-auto bg-gray-900 p-4">
                <SignOutButton>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
                        Sign Out
                    </button>
                </SignOutButton>
            </div>
        </div>
    );
}
