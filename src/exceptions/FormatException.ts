/**
 * Contains the FormatException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
import type { FormatterType } from "../../deps.ts";
//  #endregion

//  #region type-import-local
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link FormatException} message;
 */
const DEFAULT_MSG = "An expression for a formatter is invalid.";

/**
 * Creates and returns an {@link FormatException} message based on
 * {@link FormatExceptionInit} properties.
 *
 * @param init The {@link FormatExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: FormatExceptionInit): string => {
  const { formatExpression, formatter } = init;

  switch (true) {
    case (!!formatExpression && !!formatter):
      return `The expression for the formatter "${formatter}" is invalid: "${formatExpression}".`;
    case (!!formatExpression):
      return `The expression for a formatter is invalid: "${formatExpression}".`;
    case (!!formatter):
      return `An expression for the formatter "${formatter}" is invalid.`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link FormatException} class.
 */
export interface FormatExceptionInit extends ExceptionInit {
  /**
   * The format expression that is invalid.
   */
  formatExpression?: string;

  /**
   * The type of formatter.
   */
  formatter?: FormatterType;
}
//  #endregion

// #region feature-export-file
/**
 * An exception that occurs when a format expression is invalid for a formatter.
 */
export class FormatException<
  T extends FormatExceptionInit = FormatExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link FormatException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link FormatException} with a message created based on
   * {@link FormatExceptionInit} properties.
   *
   * @param init The {@link FormatExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link FormatException} with the supplied `message`,
   * optionally with additional {@link FormatExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link FormatExceptionInit} properties.
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
   * The exception code for the {@link FormatException} class.
   */
  public readonly code: number = 17;

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
