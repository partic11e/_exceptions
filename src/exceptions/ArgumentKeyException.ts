/**
 * Contains the ArgumentKeyException class and associated types.
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
 * The default {@link ArgumentKeyException} message;
 */
const DEFAULT_MSG =
  "Unable to locate a property key on an object or record argument.";

/**
 * Creates and returns an {@link ArgumentKeyException} message based on
 * {@link ArgumentKeyExceptionInit} properties.
 *
 * @param init The {@link ArgumentKeyExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ArgumentKeyExceptionInit): string => {
  const { argumentName, key, validKeys } = init;
  const toCsv = validKeys && validKeys.length && validKeys.join(`", "`);

  switch (true) {
    case (!!argumentName && !!key && !!toCsv):
      return `Unable to locate the property key "${key}" on the object or record argument "${argumentName}". Valid property keys include: "${toCsv}".`;
    case (!!key && !!toCsv):
      return `Unable to locate the property key "${key}" on an object or record argument. Valid property keys include: "${toCsv}".`;
    case (!!argumentName && !!toCsv):
      return `Unable to locate a property key on the object or record argument "${argumentName}". Valid property keys include: "${toCsv}".`;
    case (!!argumentName && !!key):
      return `Unable to locate the property key "${key}" on the object or record argument "${argumentName}".`;
    case (!!toCsv):
      return `Unable to locate a property key on an object or record argument. Valid property keys include: "${toCsv}".`;
    case (!!key):
      return `Unable to locate the property key "${key}" on an object or record argument.`;
    case (!!argumentName):
      return `Unable to locate a property key on the object or record argument "${argumentName}".`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link ArgumentKeyException} class.
 */
export interface ArgumentKeyExceptionInit extends ExceptionInit {
  /**
   * The key that is not a valid key.
   */
  key?: string;

  /**
   * The list of valid keys.
   */
  validKeys?: string[];

  /**
   * The name of the symbol representing the object or record.
   */
  argumentName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a property key doesn't exist on an object or record argument.
 */
export class ArgumentKeyException<
  T extends ArgumentKeyExceptionInit = ArgumentKeyExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link ArgumentKeyException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ArgumentKeyException} with a message created based on
   * {@link ArgumentKeyExceptionInit} properties.
   *
   * @param init The {@link ArgumentKeyExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ArgumentKeyException} with the supplied `message`,
   * optionally with additional {@link ArgumentKeyExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ArgumentKeyExceptionInit} properties.
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
   * The exception code for the {@link ArgumentKeyException} class.
   */
  public readonly code: number = 13;

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
