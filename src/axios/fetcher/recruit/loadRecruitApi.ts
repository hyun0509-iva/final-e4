import { getBaseUrl } from "@/utils/getBaseUrl";
import axios from "axios";

export const loadRecruitApi = async () => {
  try {
    const { data } = await axios.get(getBaseUrl("/api/recruits"));
    console.log(data)
    return data;
  } catch (err: any) {
    console.error(err);
  }
};
