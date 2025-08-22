import axios from 'axios';
import Task from "../types/task";

const API_URL = 'http://localhost:5000/tasks';

export const fetchTasks = () => axios.get<Task[]>(API_URL);
export const addTask = (task: Partial<Task>) => axios.post<Task>(API_URL, task);
export const updateTask = (id: string, updatedFields: Partial<Task>) =>
  axios.put(`${API_URL}/${id}`, updatedFields);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
