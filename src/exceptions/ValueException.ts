/**
 * Contains the ValueException class and associated types.
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
 * The default {@link ValueException} message;
 */
const DEFAULT_MSG = "A symbol has the correct type, but an invalid value.";

/**
 * Creates and returns an {@link ValueException} message based on
 * {@link ValueExceptionInit} properties.
 *
 * @param init The {@link ValueExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ValueExceptionInit): string => {
  const { valueName, valueConstraints } = init;
  const toCsv = !!valueConstraints && !!valueConstraints.length &&
    valueConstraints.join(", ");

  switch (true) {
    case (!!valueName && !!toCsv):
      return `The symbol "${valueName}" has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!toCsv):
      return `A symbol has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!valueName):
      return `The symbol "${valueName}" has the correct type, but an invalid value.`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link ValueException} class.
 */
export interface ValueExceptionInit extends ExceptionInit {
  /**
   * The constraints of the value.
   */
  valueConstraints?: string[];

  /**
   * The name of the symbol that has an invalid value.
   */
  valueName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a symbol has a correct type, but has an invalid value.
 */
export class ValueException<
  T extends ValueExceptionInit = ValueExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link ValueException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ValueException} with a message created based on
   * {@link ValueExceptionInit} properties.
   *
   * @param init The {@link ValueExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ValueException} with the supplied `message`,
   * optionally with additional {@link ValueExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ValueExceptionInit} properties.
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
   * The exception code for the {@link ValueException} class.
   */
  public readonly code: number = 5;

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
