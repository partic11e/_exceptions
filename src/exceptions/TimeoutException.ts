/**
 * Contains the TimeoutException class and associated types.
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
 * The default {@link TimeoutException} message;
 */
const DEFAULT_MSG = "An operation timed out.";

/**
 * Creates and returns an {@link TimeoutException} message based on
 * {@link TimeoutExceptionInit} properties.
 *
 * @param init The {@link TimeoutExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: TimeoutExceptionInit): string => {
  const { operationName, operationTimeout } = init;

  switch (true) {
    case (!!operationName && typeof operationTimeout === "number"): {
      const s = operationTimeout !== 1 ? "s" : "";
      return `The operation "${operationName}" timed out after ${operationTimeout} second${s}.`;
    }
    case (!!operationName):
      return `The operation "${operationName}" timed out.`;
    case (typeof operationTimeout === "number"): {
      const s = operationTimeout !== 1 ? "s" : "";
      return `An operation timed out after ${operationTimeout} second${s}.`;
    }
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link TimeoutException} class.
 */
export interface TimeoutExceptionInit extends ExceptionInit {
  /**
   * The name of the operation that timed out.
   */
  operationName?: string;

  /**
   * The number, in seconds, of the specified timeout.
   */
  operationTimeout?: number;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when an operation has exceeded a timeout threshold.
 */
export class TimeoutException<
  T extends TimeoutExceptionInit = TimeoutExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link TimeoutException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link TimeoutException} with a message created based on
   * {@link TimeoutExceptionInit} properties.
   *
   * @param init The {@link TimeoutExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link TimeoutException} with the supplied `message`,
   * optionally with additional {@link TimeoutExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link TimeoutExceptionInit} properties.
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
   * The exception code for the {@link TimeoutException} class.
   */
  public readonly code: number = 3;

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
