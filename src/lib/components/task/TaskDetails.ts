export interface TaskDetailsProps {
  taskIdentifier: string;
  taskTitle: string;
  taskContent: string;
  taskAuthor: string;
  isCompleted: boolean;
  completedAt: string | null;
  createdAt: string;
}