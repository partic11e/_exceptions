/**
 * Contains the ArgumentException class and associated types.
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
 * The default {@link ArgumentException} message;
 */
const DEFAULT_MSG = "An argument has the correct type, but an invalid value.";

/**
 * Creates and returns an {@link ArgumentException} message based on
 * {@link ArgumentExceptionInit} properties.
 *
 * @param init The {@link ArgumentExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ArgumentExceptionInit): string => {
  const { argumentName, argumentConstraints } = init;
  const toCsv = !!argumentConstraints && !!argumentConstraints.length &&
    argumentConstraints.join(", ");

  switch (true) {
    case (!!argumentName && !!toCsv):
      return `The argument "${argumentName}" has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!toCsv):
      return `An argument has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!argumentName):
      return `The argument "${argumentName}" has the correct type, but an invalid value.`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link ArgumentException} class.
 */
export interface ArgumentExceptionInit extends ExceptionInit {
  /**
   * The constraints of the argument.
   */
  argumentConstraints?: string[];

  /**
   * The name of the argument that has an invalid value.
   */
  argumentName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when an argument has the correct type, but an invalid value.
 */
export class ArgumentException<
  T extends ArgumentExceptionInit = ArgumentExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link ArgumentException} with the default message,
   * "An argument has the correct type, but an invalid value.", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ArgumentException} with a message created based on
   * {@link ArgumentExceptionInit} properties.
   *
   * @param init The {@link ArgumentExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ArgumentException} with the supplied `message`,
   * optionally with additional {@link ArgumentExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ArgumentExceptionInit} properties.
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
   * The exception code for the {@link ArgumentException} class.
   */
  public readonly code: number = 11;

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
