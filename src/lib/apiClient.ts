import axiosInstance from './axios';

export const get = async <T>(url: string): Promise<T> => {
  const res = await axiosInstance.get<T>(url);
  return res.data;
};

export const post = async <T, U>(url: string, data: U): Promise<T> => {
  const res = await axiosInstance.post<T>(url, data);
  return res.data;
};
