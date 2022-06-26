/**
 * Contains the NotImplementedException class and associated types.
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
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link NotImplementedException} message;
 */
const DEFAULT_MSG = "This method is not implemented.";

/**
 * Creates and returns an {@link NotImplementedException} message based on
 * {@link NotImplementedExceptionInit} properties.
 *
 * @param init The {@link NotImplementedExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: NotImplementedExceptionInit): string => {
  const { methodName } = init;

  return methodName
    ? `The method "${methodName}" is not implemented.`
    : DEFAULT_MSG;
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link NotImplementedException} class.
 */
export interface NotImplementedExceptionInit extends ExceptionInit {
  /**
   * The name of the method that is not implemented.
   */
  methodName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a method is not implemented.
 */
export class NotImplementedException<
  T extends NotImplementedExceptionInit = NotImplementedExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link NotImplementedException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link NotImplementedException} with a message created based on
   * {@link NotImplementedExceptionInit} properties.
   *
   * @param init The {@link NotImplementedExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link NotImplementedException} with the supplied `message`,
   * optionally with additional {@link NotImplementedExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link NotImplementedExceptionInit} properties.
   */
  constructor(message: string, init?: T);
  constructor(msgOrInit: string | T = DEFAULT_MSG, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== "string") {
      init = msgOrInit;
      message = msgFromInit(init);
    }

    super(message, init);
  }
  //  #endregion

  //  #region properties
  /**
   * The exception code for the {@link NotImplementedException} class.
   */
  public readonly code: number = 15;

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
//  #endregion
