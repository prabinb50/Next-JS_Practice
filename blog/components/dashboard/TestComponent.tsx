"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';

export default function TestComponent() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
        </div>
    )
}
