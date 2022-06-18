/**
 * Contains the class and types for creating an {@link AbortedException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import type { OperationType } from "../../deps.ts";

import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link AbortedException} message.
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

/**
 * A class representing exceptions that occur when an operation has been
 * prematurely aborted.
 */
export class AbortedException<
  T extends AbortedExceptionInit = AbortedExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link AbortedException} class.
   */
  public readonly code: number = 9;

  /**
   * Creates a new {@link AbortedException} with the default message,
   * "An operation was aborted prematurely.", and no exception init data.
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
}
