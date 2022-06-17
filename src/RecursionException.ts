/**
 * Contains the class and types for creating a {@link RecursionException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link RecursionException} message.
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

/**
 * A class representing exceptions that occur when an operation has exceeded
 * a maximum number of recursions.
 */
export class RecursionException<
  T extends RecursionExceptionInit = RecursionExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link RecursionException} class.
   */
  public readonly code: number = 4;

  /**
   * Creates a new {@link RecursionException} with the default message,
   * "An operation exceeded the maximum recursion depth.", and no exception
   * init data.
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
}
