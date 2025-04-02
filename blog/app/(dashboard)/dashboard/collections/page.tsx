import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

export default async function CollectionPage() {
    const user = await currentUser();
    console.log(user);
    return (
        <div>CollectionPage</div>
    )
}
