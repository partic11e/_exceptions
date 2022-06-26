/**
 * Contains the KeyException class and associated types.
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
 * The default {@link KeyException} message;
 */
const DEFAULT_MSG = "Unable to locate a property key on an object or record.";

/**
 * Creates and returns an {@link KeyException} message based on
 * {@link KeyExceptionInit} properties.
 *
 * @param init The {@link KeyExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: KeyExceptionInit): string => {
  const { valueName, key, validKeys } = init;
  const toCsv = validKeys && validKeys.length && validKeys.join(`", "`);

  switch (true) {
    case (!!valueName && !!key && !!toCsv):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}". Valid property keys include: "${toCsv}".`;
    case (!!key && !!toCsv):
      return `Unable to locate the property key "${key}" on an object or record. Valid property keys include: "${toCsv}".`;
    case (!!valueName && !!toCsv):
      return `Unable to locate a property key on the object or record "${valueName}". Valid property keys include: "${toCsv}".`;
    case (!!valueName && !!key):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}".`;
    case (!!toCsv):
      return `Unable to locate a property key on an object or record. Valid property keys include: "${toCsv}".`;
    case (!!key):
      return `Unable to locate the property key "${key}" on an object or record.`;
    case (!!valueName):
      return `Unable to locate a property key on the object or record "${valueName}".`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link KeyException} class.
 */
export interface KeyExceptionInit extends ExceptionInit {
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
  valueName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a property key doesn't exist on an object or record.
 */
export class KeyException<
  T extends KeyExceptionInit = KeyExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link KeyException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link KeyException} with a message created based on
   * {@link KeyExceptionInit} properties.
   *
   * @param init The {@link KeyExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link KeyException} with the supplied `message`,
   * optionally with additional {@link KeyExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link KeyExceptionInit} properties.
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
   * The exception code for the {@link KeyException} class.
   */
  public readonly code: number = 7;

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
