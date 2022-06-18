/**
 * Contains the class and types for creating an {@link ArgumentException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link ArgumentException} message.
 */
const DEFAULT_MSG = "An argument has the correct type, but an invalid value.";

/**
 * Creates and returns an {@link ArgumentException} message based on
 * {@link ArgumentExceptionInit} properties.
 *
 * @param init The {@link ArgumentExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ArgumentExceptionInit): string => {
  const { argumentName, argumentConstraints } = init;
  const toCsv = !!argumentConstraints && !!argumentConstraints.length &&
    argumentConstraints.join(", ");

  switch (true) {
    case (!!argumentName && !!toCsv):
      return `The argument "${argumentName}" has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!toCsv):
      return `An argument has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!argumentName):
      return `The argument "${argumentName}" has the correct type, but an invalid value.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link ArgumentException} class.
 */
export interface ArgumentExceptionInit extends ExceptionInit {
  /**
   * The constraints of the argument.
   */
  argumentConstraints?: string[];

  /**
   * The name of the argument that has an invalid value.
   */
  argumentName?: string;
}

/**
 * A class representing exceptions that occur when an argument has a correct
 * type, but has an invalid value.
 */
export class ArgumentException<
  T extends ArgumentExceptionInit = ArgumentExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link ArgumentException} class.
   */
  public readonly code: number = 11;

  /**
   * Creates a new {@link ArgumentException} with the default message,
   * "An argument has the correct type, but an invalid value.", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ArgumentException} with a message created based on
   * {@link ArgumentExceptionInit} properties.
   *
   * @param init The {@link ArgumentExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ArgumentException} with the supplied `message`,
   * optionally with additional {@link ArgumentExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ArgumentExceptionInit} properties.
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
