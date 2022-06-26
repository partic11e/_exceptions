/**
 * Contains the AbortedException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
import type { OperationType } from "../../deps.ts";
//  #endregion

//  #region type-import-local
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link AbortedException} message;
 */
const DEFAULT_MSG = "An operation was aborted prematurely.";

/**
 * Creates and returns an {@link AbortedException} message based on
 * {@link AbortedExceptionInit} properties.
 *
 * @param init The {@link AbortedExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: AbortedExceptionInit): string => {
  const { operationName, operationType } = init;
  const a = operationType && "aeiou".includes(operationType.charAt(0))
    ? "An"
    : "A";

  switch (true) {
    case (!!operationName && !!operationType):
      return `The ${operationType} "${operationName}" was aborted prematurely.`;
    case (!!operationType):
      return `${a} ${operationType} was aborted prematurely.`;
    case (!!operationName):
      return `The operation "${operationName}" was aborted prematurely.`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link AbortedException} class.
 */
export interface AbortedExceptionInit extends ExceptionInit {
  /**
   * The name of the operation that was aborted.
   */
  operationName?: string;

  /**
   * The type of operation.
   */
  operationType?: OperationType;
}
//  #endregion

// #region feature-export-file
/**
 * An exception that is thrown when an operation is aborted.
 */
export class AbortedException<
  T extends AbortedExceptionInit = AbortedExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link AbortedException} with the default message,
   * "An", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link AbortedException} with a message created based on
   * {@link AbortedExceptionInit} properties.
   *
   * @param init The {@link AbortedExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link AbortedException} with the supplied `message`,
   * optionally with additional {@link AbortedExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link AbortedExceptionInit} properties.
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
   * The exception code for the {@link AbortedException} class.
   */
  public readonly code: number = 9;

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
