"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createCategory } from '@/actions/category';
import { useUser } from '@/context/user-context';


export const categorySchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(50, { message: "Username must be at most 50 characters." }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }).max(500, { message: "Description must be at most 500 characters." })
})

export type CategorySchema = z.infer<typeof categorySchema>;

export default function CreateComponent() {
    // 1. Define your form.
    const form = useForm<CategorySchema>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 2. Define a submit handler.
    async function onSubmit(values: CategorySchema) {
        try {
            setIsLoading(true);
            const response = await createCategory(values);
            if (response.success) {
                setIsLoading(false);
                form.reset(); // reset the form after successful submission
                alert("Category created successfully")
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error creating category: ", error);
            alert("Error creating category");
        }
    }

    const { name, email } = useUser();

    return (
        <Card className="w-[350px]" >
            <CardHeader>
                <CardTitle>Create Category</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Eg. Music" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is the name of the category.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Eg. This category is for music lovers" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is the description of the category.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Creating..." : "Create Category"}
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <p>{name}</p>
            <p>{email}</p>
        </Card >

    )
}
