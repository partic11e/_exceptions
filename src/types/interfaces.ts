/**
 * The global shared interfaces for the partic11e library exception module.
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
import type { Exception } from "../exceptions/Exception.ts";
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * An interface describing the base `init` properties that all
 * {@link Exception} classes can utilize.
 */
export interface IExceptionInit {
  cause?: Error | Exception;
}
//  #endregion

//  #region internal
//  #endregion
