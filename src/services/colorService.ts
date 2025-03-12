import { AxiosError } from "axios";
import api from "./api";

// GET request for fetching all colors
export const getColors = async () => {
   try {
      const response = await api.get("/colors");
      return response.data;
   } catch (error) {
      handleAxiosError(error);
   }
};

// CREATE request for adding color
export const addColor = async (colorData: { name: string; hex: string }) => {
   try {
      const response = await api.post("/colors", colorData);
      return response.data;
   } catch (error) {
      handleAxiosError(error);
   }
};

// DELETE request for removing color
export const deleteColor = async (id: string) => {
   try {
      await api.delete(`/colors/${id}`);
   } catch (error) {
      handleAxiosError(error);
   }
};

// Handling errors
const handleAxiosError = (error: unknown) => {
   if (error instanceof AxiosError) {
      if (error.response) {
         throw new Error(`API Error: ${error.response.status} - ${error.response.data?.message || "Unknown error"}`);
      } else if (error.request) {
         throw new Error("Network error: No response from server");
      }
   }
   throw new Error(error instanceof Error ? error.message : "An unexpected error occurred");
};
