import { z } from 'zod';

export const issueSchema = z.object({
	title: z.string().min(1, 'Title is required').max(250),
	description: z.string().min(1, 'Description is required').max(5000),
	identifier: z.string().min(1, 'Identifier is required').max(30),
	status: z.enum(['Backlog', 'Todo', 'In Progress', 'Done', 'Cancelled']),
	priority: z.enum(['None', 'Low', 'Medium', 'High', 'Urgent']),
	labels: z.enum(['Bug', 'Feature', 'Documentation', 'Question', 'Task']),
	due_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
		message: 'Invalid date format'
	}),
	created_by: z.string().min(1, 'Created by is required')
});

export type IssueSchema = typeof issueSchema;
