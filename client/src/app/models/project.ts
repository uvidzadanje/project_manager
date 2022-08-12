import { Team } from "./team";

export interface Project {
  id: number;
  name: string;
  deadline_timestamp: string;
  teams?: Team[];
}
