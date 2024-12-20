import { z } from 'zod';

const AllowedCategories = ['Mountain', 'Road', 'Hybrid', 'Electric'];

const ProductSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  brand: z.string({ message: 'Brand is required' }),
  price: z
    .number({ message: 'Price must be a number' })
    .positive({ message: 'Price must be a positive number' }),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
    message: `Category must be one of ${AllowedCategories.join(', ')}`,
  }),
  description: z.string({ message: 'Description is required' }),
  quantity: z
    .number({ message: 'Quantity is required' })
    .int({ message: 'Quantity must be a valid number' })
    .nonnegative({ message: 'Quantity cannot be negative' }),
  inStock: z.boolean().optional().default(true),
});

const ProductSchemaUpdate = z.object({
  name: z.string().optional().nullable(),
  brand: z.string().optional().nullable(),
  price: z
    .number({ message: 'Price must be a number' })
    .positive({ message: 'Price must be a positive number' })
    .optional()
    .nullable(),
  category: z
    .enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
      message: `Category must be one of ${AllowedCategories.join(', ')}`,
    })
    .optional()
    .nullable(),
  description: z
    .string({ message: 'Description is required' })
    .optional()
    .nullable(),
  quantity: z
    .number({ message: 'Quantity is required' })
    .int({ message: 'Quantity must be a valid number' })
    .nonnegative({ message: 'Quantity cannot be negative' })
    .optional()
    .nullable(),
  inStock: z.boolean().optional().nullable(),
});

export { ProductSchema, ProductSchemaUpdate };
