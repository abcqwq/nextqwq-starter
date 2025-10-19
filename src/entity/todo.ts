import { z } from 'zod';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export const TodosSchema = z.array(TodoSchema);
