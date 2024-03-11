import { NewsMotd } from "../../api/interfaces/News";

export interface News extends NewsMotd {
  category: string;
}
