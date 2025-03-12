import { toast } from "react-toastify";
import { checkColorExist } from "./checkColorExist";
import { isValidHex } from "./isValidHex";

export const validateColor = async (name: string, hex: string) => {
   if (!hex || !isValidHex(hex)) {
      toast.error("Invalid HEX code! Please enter a valid HEX color code.");
      return false;
   }

   try {
      const colorName = await checkColorExist(hex);

      if (!colorName || colorName === "Unknown") {
         toast.warn("The color was not found in the database of known colors.");
         return false;
      }

      if (!name) {
         toast.info("Enter a color name before adding.");
         return false;
      }

      return true;
   } catch (error) {
      toast.error("An error occurred, please try again.");
      console.error("Error fetching color:", error);
      return false;
   }
};
