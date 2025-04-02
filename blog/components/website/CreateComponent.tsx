"use client"
import { createCategory } from '@/actions/category';
import React, { useState } from 'react'

export default function CreateComponent() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await createCategory({
                name: name,
                description: description
            });
            if (response.success) {
                console.log("Category created successfully");
                setIsLoading(false);

                // reset the form fields
                setName("");
                setDescription("");
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error creating category: ", error);
        }
    }

    return (
        <div className="flex items-center justify-between px-5">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-lg shadow-md w-screen "
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Create Category</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Category Name
                    </label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Enter category name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                        Category Description
                    </label>
                    <input 
                        id="description"
                        type="text" 
                        placeholder="Enter category description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className={`w-full py-2 px-4 text-white font-medium rounded-lg ${
                        isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                >
                    {isLoading ? "Creating..." : "Create Category"}
                </button>
            </form>
        </div>
    )
}
