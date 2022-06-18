/**
 * Contains the class and types for creating an {@link ExternalException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { CodeBaseType } from "../../deps.ts";

import type { TExceptionInit } from "../types/mod.ts";

import { Exception } from "./Exception.ts";

/**
 * The default {@link ExternalException} message.
 */
const DEFAULT_MSG = "An external codebase raised an exception.";

/**
 * Creates and returns an {@link ExternalException} message based on
 * {@link ExternalExceptionInit} properties.
 *
 * @param init The {@link ExternalExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ExternalExceptionInit): string => {
  const { externalName, externalType } = init;

  switch (true) {
    case (!!externalName && !!externalType):
      return `The external ${externalType} "${externalName}" raised an exception.`;
    case (!!externalName):
      return `The external codebase "${externalName}" raised an exception.`;
    case (!!externalType):
      return `An external ${externalType} raised an exception.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link ExternalException} class.
 */
export type ExternalExceptionInit = TExceptionInit<{
  /**
   * The name of the external codebase that caused the underlying exception.
   */
  externalName?: string;
  /**
   * The type of codebase that caused the underlying exception.
   */
  externalType?: CodeBaseType;
}>;

/**
 * A class representing exceptions that occur when non-user defined code throws
 * an exception that cannot be gracefully handled.
 */
export class ExternalException<
  T extends ExternalExceptionInit = ExternalExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link ExternalException} class.
   */
  public readonly code: number = 1;

  /**
   * Creates a new {@link ExternalException} with the default message,
   * "An external codebase raised an exception.", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ExternalException} with a message created based on
   * {@link ExternalExceptionInit} properties.
   *
   * @param init The {@link ExternalExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ExternalException} with the supplied `message`,
   * optionally with additional {@link ExternalExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ExternalExceptionInit} properties.
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
