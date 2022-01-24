/**
 * Contains the class and types for creating a {@link NotSupportedException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { TExceptionInit } from "./types.ts";

import { Exception } from "./Exception.ts";

/**
 * The default {@link NotSupportedException} message.
 */
const DEFAULT_MSG = "This method is not supported.";

/**
 * Creates and returns an {@link NotSupportedException} message based on
 * {@link NotSupportedExceptionInit} properties.
 *
 * @param init The {@link NotSupportedExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: NotSupportedExceptionInit): string => {
  const { methodName } = init;

  return methodName
    ? `The method "${methodName}" is not supported.`
    : DEFAULT_MSG;
};

/**
 * An interface describing the `init` properties for the
 * {@link NotSupportedException} class.
 */
export type NotSupportedExceptionInit = TExceptionInit<{
  /**
   * The name of the method that is not supported.
   */
  methodName?: string;
}>;

/**
 * A class representing exceptions that occur when a method is not supported.
 */
export class NotSupportedException<
  T extends NotSupportedExceptionInit = NotSupportedExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link NotSupportedException} class.
   */
  public readonly code: number = 14;

  /**
   * Creates a new {@link NotSupportedException} with the default message,
   * "This method is not supported.", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link NotSupportedException} with a message created based on
   * {@link NotSupportedExceptionInit} properties.
   *
   * @param init The {@link NotSupportedExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link NotSupportedException} with the supplied `message`,
   * optionally with additional {@link NotSupportedExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link NotSupportedExceptionInit} properties.
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
