/**
 * Internal constants for use with the partic11e library exception module.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { getExceptionsHelpUrl } from "../../deps.ts";
//  #endregion

//  #region feature-import-local
import { VERSION } from "../version.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features

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
//  #endregion

//  #region internal
//  #endregion
