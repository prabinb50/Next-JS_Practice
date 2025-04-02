// "use client"
// import { getAllCategory } from '@/actions/category';
// import React, { use, useEffect, useState } from 'react'

// // define a typescript interface for to represent the structure of a category object
// interface ICategory {
//     id: number;
//     name: string;
//     description: string;
//     createdAt: Date;
//     updatedAt: Date;
//     deletedAt: Date | null;
// };

// export default function CategoriesPage() {

//     // useState is a hook that allows you to add state to your functional components
//     // state to store categories 
//     const [categories, setCategories] = useState<ICategory[] | null>([]);

//     // function to fetch categories from the server
//     const fetchCategories = async () => {
//         const response = await getAllCategory();
//         if (response.success) {
//             setCategories(response.data as ICategory[]);
//         }
//     };

//     // call the fetchCategories function 
//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     return (
//         <div>CategoriesPage</div>
//     )
// }

import { getAllCategory } from '@/actions/category';
import CreateComponent from '@/components/website/CreateComponent';
import TestComponent from '@/components/website/TestComponent';

export default async function CategoriesPage() {

    const response = await getAllCategory();
    if (!response.success) {
        return (
            <div>Error fetching categories</div>
        )
    }
    console.log("Categories: ", response.data);

    return (
        <div className=' '>
            {/* Categories Page
            <TestComponent /> */}

            <CreateComponent />

            <div className="flex flex-col gap-3 px-5 py-5">
                {response.data?.map((category) => (
                    <div key={category.id}>
                        {category.name}
                        {category.description}
                    </div>
                ))}
            </div>
        </div>
    )
}

