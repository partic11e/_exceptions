import { Exception } from "./Exception.ts";
import { TExceptionInit } from "./types.ts";
import type { FormatterType } from "../deps.ts";

/**
 * The default {@link FormatException} message.
 */
const DEFAULT_MSG = "An expression for a formatter is invalid.";

/**
 * Creates and returns an {@link FormatException} message based on
 * {@link FormatExceptionInit} properties.
 *
 * @param init The {@link FormatExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: FormatExceptionInit): string => {
  const { formatExpression, formatter } = init;

  switch (true) {
    case (!!formatExpression && !!formatter):
      return `The expression for the formatter "${formatter}" is invalid: "${formatExpression}".`;
    case (!!formatExpression):
      return `The expression for a formatter is invalid: "${formatExpression}".`;
    case (!!formatter):
      return `An expression for the formatter "${formatter}" is invalid.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link FormatException} class.
 */
export type FormatExceptionInit = TExceptionInit<{
  /**
   * The type of formatter.
   */
  formatter?: FormatterType;

  /**
   * The format expression that is invalid.
   */
  formatExpression?: string;
}>;

/**
 * A class representing exceptions that occur when a format expression is
 * invalid for a formatter.
 */
export class FormatException<
  T extends FormatExceptionInit = FormatExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link FormatException} with the default message,
   * "An expression for a formatter is invalid..", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link FormatException} with a message created based on
   * {@link FormatExceptionInit} properties.
   *
   * @param init The {@link FormatExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link FormatException} with the supplied `message`,
   * optionally with additional {@link FormatExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link FormatExceptionInit} properties.
   */
  constructor(message: string, init?: T);
  //  implementation
  constructor(msgOrInit: string | T = DEFAULT_MSG, maybeInit?: T) {
    //  (message: string, init?: T)
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    //  (init: T)
    if (typeof msgOrInit !== "string") {
      init = msgOrInit;
      message = msgFromInit(init);
    }

    super(message, init);
  }

  //#endregion
  //#region Public properties

  /**
   * The exception code for the {@link FormatException} class.
   */
  public readonly code: number = 17;

  //#endregion
}
