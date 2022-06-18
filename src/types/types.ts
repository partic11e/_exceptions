/**
 * The global shared types for the partic11e library exception module.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
import type { IExceptionInit } from "./interfaces.ts";
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * A generic interface describing additional `init` properties available to a
 * specific derived {@link Exception} unified with the common properties
 * available to all {@link Exception} classes.
 */
export type TExceptionInit<
  T extends Record<string, unknown> = Record<string, unknown>,
> = IExceptionInit & T;
//  #endregion

//  #region internal
//  #endregion
