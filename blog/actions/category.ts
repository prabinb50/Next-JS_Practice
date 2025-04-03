"use server";
import { CategorySchema } from "@/components/dashboard/CreateComponent";
import { db } from "@/lib/db/drizzle";
import { cateoryTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// interface for category
// interface ICategory {
//     name: string;
//     description: string;
// };

// Create a new category
export const createCategory = async (categoryData: CategorySchema) => {
    try {
        const response = await db.insert(cateoryTable).values(categoryData);

        // revalidate the path to refresh the data
        revalidatePath("/dashboard/categories");
        return {
            success: true,
            message: "Category created successfully",
            data: response
        };
    } catch (error) {
        console.log("Error creating category: ", error);
        return {
            success: false,
            message: "Error creating category",
            error: error
        };
    }
};

// Get all categories
export const getAllCategory = async () => {
    try {
        // check if categories exists or not
        const categoriesExists = await db.select().from(cateoryTable);
        if (!categoriesExists) {
            return {
                success: false,
                message: "No categories found",
                data: null
            };
        }

        // get all categories
        const response = await db.select().from(cateoryTable);
        return {
            success: true,
            message: "Categories retrieved successfully",
            data: response
        };
    } catch (error) {
        console.log("Error getting categories: ", error);
        return {
            success: false,
            message: "Error getting categories",
            error: error
        };
    }
};

// Get a single category by ID
export const getCategoryById = async (id: number) => {
    try {
        // check if category exists or not
        const categoryExists = await db.select().from(cateoryTable).where(eq(cateoryTable.id, id));
        if (!categoryExists) {
            return {
                success: false,
                message: "Category not found",
                data: null
            };
        }

        // get the category by ID
        const response = await db.select().from(cateoryTable).where(eq(cateoryTable.id, id));
        return {
            success: true,
            message: "Category retrieved successfully",
            data: response
        };
    } catch (error) {
        console.log("Error getting category: ", error);
        return {
            success: false,
            message: "Error getting category",
            error: error
        };
    }
};

// Update a category by ID
export const updateCategory = async (id: number, categoryData: CategorySchema) => {
    try {
        // check if category exists or not
        const categoryExists = await db.select().from(cateoryTable).where(eq(cateoryTable.id, id));
        if (!categoryExists) {
            return {
                success: false,
                message: "Category not found",
                data: null
            };
        }

        // update the category by ID
        const response = await db.update(cateoryTable).set(categoryData).where(eq(cateoryTable.id, id));
        return {
            success: true,
            message: "Category updated successfully",
            data: response
        };
    } catch (error) {
        console.log("Error updating category: ", error);
        return {
            success: false,
            message: "Error updating category",
            error: error
        };
    }
};


export const deleteCategory = async (id: number) => {
    try {
        // check if category exists or not
        const categoryExists = await db.select().from(cateoryTable).where(eq(cateoryTable.id, id));
        if (!categoryExists) {
            return {
                success: false,
                message: "Category not found",
                data: null
            };
        }

        // delete the category by ID
        const response = await db.delete(cateoryTable).where(eq(cateoryTable.id, id));
        return {
            success: true,
            message: "Category deleted successfully",
            data: response
        };

    } catch (error) {
        console.log("Error deleting category: ", error);
        return {
            success: false,
            message: "Error deleting category",
            error: error
        };
    }
};