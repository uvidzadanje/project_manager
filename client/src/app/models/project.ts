import { Team } from "./team";

export interface Project {
  id: number;
  name: string;
  deadline_timestamp: Date;
  teams?: Team[];
}
