/**
 * Internal constants for the partic11e exceptions module.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { getExceptionsHelpUrl } from "../deps.ts";
import { VERSION } from "./version.ts";

/**
 * The base URL for the partic11e Exception exception utility for this modules version.
 */
export const P11_EXC_KB = getExceptionsHelpUrl(VERSION);

/**
 * The properties to map data to URL parameters and object properties.
 */
export const ExceptionSerializationData = {
  name: "name",
  message: "message",
  cause: "cause",
  helpUrl: "url",
  data: "data",
};
