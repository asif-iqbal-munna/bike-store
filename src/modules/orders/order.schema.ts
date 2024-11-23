import { z } from 'zod';

const OrderSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email address format.' }),
  product: z.string().min(1, { message: 'Product is required.' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer.' })
    .positive({ message: 'Quantity must be greater than 0.' }),
  totalPrice: z
    .number()
    .nonnegative({ message: 'Total price must be a non-negative number.' }),
});

export { OrderSchema };
