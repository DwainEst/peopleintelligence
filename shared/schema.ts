import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest"),
  goals: z.string().optional(),
  variant: z.enum(["corporate", "christian"]),
});

export type ContactSubmission = z.infer<typeof contactSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
}
