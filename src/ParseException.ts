import { Exception } from "./Exception.ts";
import { TExceptionInit } from "./types.ts";
import type { ParserType } from "../deps.ts";

/**
 * The default {@link ParseException} message.
 */
const DEFAULT_MSG = "A parser was unable to parse content.";

/**
 * Creates and returns an {@link ParseException} message based on
 * {@link ParseExceptionInit} properties.
 *
 * @param init The {@link ParseExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ParseExceptionInit): string => {
  const { parser } = init;

  return parser
    ? `The parser "${parser}" was unable to parser content.`
    : DEFAULT_MSG;
};

/**
 * An interface describing the `init` properties for the
 * {@link ParseException} class.
 */
export type ParseExceptionInit = TExceptionInit<{
  /**
   * The type of parser.
   */
  parser?: ParserType;
}>;

/**
 * A class representing exceptions that occur when a format expression is
 * invalid for a formatter.
 */
export class ParseException<
  T extends ParseExceptionInit = ParseExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link ParseException} with the default message,
   * "An expression for a formatter is invalid..", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ParseException} with a message created based on
   * {@link ParseExceptionInit} properties.
   *
   * @param init The {@link ParseExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ParseException} with the supplied `message`,
   * optionally with additional {@link ParseExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ParseExceptionInit} properties.
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
   * The exception code for the {@link ParseException} class.
   */
  public readonly code: number = 18;

  //#endregion
}
