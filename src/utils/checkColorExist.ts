import { config } from "../utils/config";

export const checkColorExist = async (hex: string) => {
   const response = await fetch(`${config.COLOR_SERVICE_KEY}/id?hex=${hex.replace("#", "")}`);
   const data = await response.json();
   return data.name?.value || "Unknown";
};
