import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  slug: z.string().min(2),
  name: z.string(),
  category: z.string(),
  image: z.string(),
  description: z.string(),
  features: z.array(z.string()).default([]),
  germinationRate: z.number().min(0).max(100).optional(),
  stock: z.number().optional(),
  details: z
    .object({
      growingConditions: z.string().optional(),
      yieldEstimates: z.string().optional(),
      packaging: z.string().optional(),
    })
    .partial()
    .optional(),
  additionalInfo: z
    .object({
      keyPoints: z.array(z.string()).optional(),
      agronomy: z
        .object({
          soil: z.string().optional(),
          irrigation: z.string().optional(),
          sowing: z
            .object({
              preparation: z.string().optional(),
              depth: z.string().optional(),
              spacing: z.string().optional(),
              methods: z.array(z.string()).optional(),
              timing: z.array(z.string()).optional(),
              seedRate: z.string().optional(),
            })
            .partial()
            .optional(),
          harvesting: z.string().optional(),
          postCutting: z.string().optional(),
          fertilizer: z.string().optional(),
          weedControl: z.string().optional(),
          pestManagement: z.string().optional(),
        })
        .partial()
        .optional(),
    })
    .partial()
    .optional(),
});

export type Product = z.infer<typeof productSchema>;

