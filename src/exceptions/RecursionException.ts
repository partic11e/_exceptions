/**
 * Contains the RecursionException class and associated types.
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
 * The default {@link RecursionException} message;
 */
const DEFAULT_MSG = "An operation exceeded the maximum recursion depth.";

/**
 * Creates and returns an {@link RecursionException} message based on
 * {@link RecursionExceptionInit} properties.
 *
 * @param init The {@link RecursionExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: RecursionExceptionInit): string => {
  const { operationName, recursionLimit, consecutiveRepeatingValues } = init;

  switch (true) {
    case (!!operationName && !!consecutiveRepeatingValues &&
      typeof recursionLimit === "number"): {
      const s = recursionLimit !== 1 ? "s" : "";
      return `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${s}.`;
    }
    case (!!consecutiveRepeatingValues && typeof recursionLimit === "number"): {
      const s = recursionLimit !== 1 ? "s" : "";
      return `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${s}.`;
    }
    case (!!operationName && !!consecutiveRepeatingValues):
      return `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values.`;
    case (!!operationName && typeof recursionLimit === "number"):
      return `The operation "${operationName}" exceeded the maximum recursion depth of ${recursionLimit}.`;
    case (!!consecutiveRepeatingValues):
      return `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values.`;
    case (typeof recursionLimit === "number"):
      return `An operation exceeded the maximum recursion depth of ${recursionLimit}.`;
    case (!!operationName):
      return `The operation "${operationName}" exceeded the maximum recursion depth.`;
    default:
      return DEFAULT_MSG;
  }
};
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link RecursionException} class.
 */
export interface RecursionExceptionInit extends ExceptionInit {
  /**
   * The values that were recursed consecutively.
   */
  consecutiveRepeatingValues?: boolean;

  /**
   * The name of the operation that exceeded the recursion limit.
   */
  operationName?: string;

  /**
   * The recursion limit exceeded.
   */
  recursionLimit?: number;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when an operation exceeds the maximum recursion depth.
 */
export class RecursionException<
  T extends RecursionExceptionInit = RecursionExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link RecursionException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link RecursionException} with a message created based on
   * {@link RecursionExceptionInit} properties.
   *
   * @param init The {@link RecursionExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link RecursionException} with the supplied `message`,
   * optionally with additional {@link RecursionExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link RecursionExceptionInit} properties.
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
   * The exception code for the {@link RecursionException} class.
   */
  public readonly code: number = 4;

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
