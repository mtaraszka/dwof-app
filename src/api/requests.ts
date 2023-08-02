import { FormulasListInterface } from "./interfaces";
import axios from "axios";

export function fetchFormulas(): Promise<FormulasListInterface> {
  return axios.get('formulas').then(({ data }) => data)
}
