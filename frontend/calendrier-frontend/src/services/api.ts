import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Service pour les semaines
export const weekService = {
  getAll: async () => {
    const response = await API.get('/weeks/');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await API.get(`/weeks/${id}/`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await API.post('/weeks/', data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await API.put(`/weeks/${id}/`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await API.delete(`/weeks/${id}/`);
    return response.data;
  },
};

// Service pour les jours
export const dayService = {
  getAll: async () => {
    const response = await API.get('/days/');
    return response.data;
  },
  getById: async (id: number) => {
    const response = await API.get(`/days/${id}/`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await API.post('/days/', data);
    return response.data;
  },
  update: async (id: number, data: any) => {
    const response = await API.put(`/days/${id}/`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await API.delete(`/days/${id}/`);
    return response.data;
  },
  getTasks: async (id: number) => {
    const response = await API.get(`/days/${id}/tasks/`);
    return response.data;
  },
};

// Service pour les installations
export const installationService = {
  getAll: async () => {
    const response = await API.get('/installations/');
    return response.data;
  },
  getById: async (id: number) => {
    const response = await API.get(`/installations/${id}/`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await API.post('/installations/', data);
    return response.data;
  },
  update: async (id: number, data: any) => {
    const response = await API.put(`/installations/${id}/`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await API.delete(`/installations/${id}/`);
    return response.data;
  },
  changeStatus: async (id: number, status: string) => {
    const response = await API.post(`/installations/${id}/change-status/`, { status });
    return response.data;
  },
  getFromProgressionLive: async (id: string) => {
    const response = await API.get(`/installations/progression-live/${id}/`);
    return response.data;
  },
};

export default API;