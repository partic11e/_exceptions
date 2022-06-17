/**
 * Contains the class and types for creating a {@link TimeoutException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link TimeoutException} message.
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

/**
 * A class representing exceptions that occur when an operation has exceeded
 * a specified or default timeout threshold.
 */
export class TimeoutException<
  T extends TimeoutExceptionInit = TimeoutExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link TimeoutException} class.
   */
  public readonly code: number = 3;

  /**
   * Creates a new {@link TimeoutException} with the default message,
   * "An operation timed out.", and no exception init data.
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
}
