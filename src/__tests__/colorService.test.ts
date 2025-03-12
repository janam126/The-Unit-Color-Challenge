import mockAxios from "jest-mock-axios";
import { addColor, deleteColor, getColors } from "../services/colorService";

describe("API functions", () => {
   afterEach(() => {
      mockAxios.reset();
   });

   test("getColors should fetch colors", async () => {
      const mockData = [{ id: "1", name: "Red", hex: "#FF0000" }];
      mockAxios.get.mockResolvedValueOnce({ data: mockData });

      const result = await getColors();
      expect(result).toEqual(mockData);
      expect(mockAxios.get).toHaveBeenCalledWith("/colors");
   });

   test("addColor should send POST request", async () => {
      const newColor = { name: "Blue", hex: "#0000FF" };
      const mockResponse = { id: "2", ...newColor };
      mockAxios.post.mockResolvedValueOnce({ data: mockResponse });

      const result = await addColor(newColor);
      expect(result).toEqual(mockResponse);
      expect(mockAxios.post).toHaveBeenCalledWith("/colors", newColor);
   });

   test("deleteColor should send DELETE request", async () => {
      const id = "1";
      mockAxios.delete.mockResolvedValueOnce({});

      await deleteColor(id);
      expect(mockAxios.delete).toHaveBeenCalledWith(`/colors/${id}`);
   });
});
