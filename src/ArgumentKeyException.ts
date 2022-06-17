/**
 * Contains the class and types for creating an {@link ArgumentKeyException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link ArgumentKeyException} message.
 */
const DEFAULT_MSG =
  "Unable to locate a property key on an object or record argument.";

/**
 * Creates and returns an {@link ArgumentKeyException} message based on
 * {@link ArgumentKeyExceptionInit} properties.
 *
 * @param init The {@link ArgumentKeyExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ArgumentKeyExceptionInit): string => {
  const { argumentName, key, validKeys } = init;
  const toCsv = validKeys && validKeys.length && validKeys.join(`", "`);

  switch (true) {
    case (!!argumentName && !!key && !!toCsv):
      return `Unable to locate the property key "${key}" on the object or record argument "${argumentName}". Valid property keys include: "${toCsv}".`;
    case (!!key && !!toCsv):
      return `Unable to locate the property key "${key}" on an object or record argument. Valid property keys include: "${toCsv}".`;
    case (!!argumentName && !!toCsv):
      return `Unable to locate a property key on the object or record argument "${argumentName}". Valid property keys include: "${toCsv}".`;
    case (!!argumentName && !!key):
      return `Unable to locate the property key "${key}" on the object or record argument "${argumentName}".`;
    case (!!toCsv):
      return `Unable to locate a property key on an object or record argument. Valid property keys include: "${toCsv}".`;
    case (!!key):
      return `Unable to locate the property key "${key}" on an object or record argument.`;
    case (!!argumentName):
      return `Unable to locate a property key on the object or record argument "${argumentName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link ArgumentKeyException} class.
 */
export interface ArgumentKeyExceptionInit extends ExceptionInit {
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

/**
 * A class representing exceptions that occur when a property key doesn't exist
 * on an object or record argument.
 */
export class ArgumentKeyException<
  T extends ArgumentKeyExceptionInit = ArgumentKeyExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link ArgumentKeyException} class.
   */
  public readonly code: number = 13;

  /**
   * Creates a new {@link ArgumentKeyException} with the default message,
   * "Unable to locate a property key on an object or record argument.", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ArgumentKeyException} with a message created based on
   * {@link ArgumentKeyExceptionInit} properties.
   *
   * @param init The {@link ArgumentKeyExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ArgumentKeyException} with the supplied `message`,
   * optionally with additional {@link ArgumentKeyExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ArgumentKeyExceptionInit} properties.
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
