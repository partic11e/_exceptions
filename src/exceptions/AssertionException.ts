/**
 * Contains the AssertionException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
import type { TExceptionInit } from "../types/mod.ts";
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link AssertionException} class.
 */
export type AssertionExceptionInit = TExceptionInit<Record<string, unknown>>;
//  #endregion

/**
 * An exception that occurs when an assertion fails.
 */
export class AssertionException<
  T extends AssertionExceptionInit = AssertionExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link AssertionException} with the supplied `message`,
   * optionally with additional {@link AssertionExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link AssertionExceptionInit} properties.
   */
  constructor(message: string, init?: T) {
    super(message, init);
  }
  //  #endregion

  //  #region properties
  /**
   * The exception code for the {@link AssertionException} class.
   */
  public readonly code: number = 2;

  //  #endregion

  //  #region interface-implementations
  //  #endregion

  //  #region abstract-methods
  //  #endregion

  //  #region method-overrides
  //  #endregion

  //  #region native-overrides
  //  #endregion

  //  #region methods
  //  #endregion

  //  #region _static-properties
  //  #endregion

  //  #region _static-methods
  //  #endregion

  //  #region _properties
  //  #endregion

  //  #region _method-overrides
  //  #endregion

  //  #region _methods
  //  #endregion

  //  #region #static-methods
  //  #endregion

  //  #region #static-properties
  //  #endregion

  //  #region #methods
  //  #endregion

  //  #region #properties
  //  #endregion
}
