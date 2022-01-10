import { VERSION } from "./version.ts";
import { getExceptionsHelpUrl } from "../deps.ts";

/**
 * The base URL for the exceptions knowledge base.
 */
export const I11N_EXC_KB = getExceptionsHelpUrl(VERSION);

/**
 * Properties to map data to URL parameters and object properties.
 */
export const ExceptionSerializationData = {
  name: "name",
  message: "message",
  cause: "cause",
  helpUrl: "url",
  data: "data",
};
