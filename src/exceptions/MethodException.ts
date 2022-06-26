/**
 * Contains the MethodException class and associated types.
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
 * The default {@link MethodException} message;
 */
const DEFAULT_MSG = "Unable to locate a method on an object.";

/**
 * Creates and returns an {@link MethodException} message based on
 * {@link MethodExceptionInit} properties.
 *
 * @param init The {@link MethodExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: MethodExceptionInit): string => {
  const { valueName, methodName, validMethods } = init;
  const toCsv = validMethods && validMethods.length &&
    validMethods.join(`", "`);

  switch (true) {
    case (!!valueName && !!methodName && !!toCsv):
      return `Unable to locate the method "${methodName}" on the object "${valueName}". Valid methods include: "${toCsv}".`;
    case (!!methodName && !!toCsv):
      return `Unable to locate the method "${methodName}" on an object. Valid methods include: "${toCsv}".`;
    case (!!valueName && !!toCsv):
      return `Unable to locate a method on the object "${valueName}". Valid methods include: "${toCsv}".`;
    case (!!valueName && !!methodName):
      return `Unable to locate the method "${methodName}" on the object "${valueName}".`;
    case (!!toCsv):
      return `Unable to locate a method on an object. Valid methods include: "${toCsv}".`;
    case (!!methodName):
      return `Unable to locate the method "${methodName}" on an object.`;
    case (!!valueName):
      return `Unable to locate a method on the object "${valueName}".`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link MethodException} class.
 */
export interface MethodExceptionInit extends ExceptionInit {
  /**
   * The method name that is not a valid method.
   */
  methodName?: string;

  /**
   * The list of valid method names.
   */
  validMethods?: string[];

  /**
   * The name of the symbol representing the object.
   */
  valueName?: string;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a method is not found on an object.
 */
export class MethodException<
  T extends MethodExceptionInit = MethodExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link MethodException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link MethodException} with a message created based on
   * {@link MethodExceptionInit} properties.
   *
   * @param init The {@link MethodExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link MethodException} with the supplied `message`,
   * optionally with additional {@link MethodExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link MethodExceptionInit} properties.
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
   * The exception code for the {@link MethodException} class.
   */
  public readonly code: number = 8;

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
