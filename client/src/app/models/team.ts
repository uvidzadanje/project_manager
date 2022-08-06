import { Employee } from "./employee";

export interface Team {
  id: number;
  name: string;
  employees?: Employee[];
}
