/**
 * Contains the ParseException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
import type { ParserType } from "../../deps.ts";
//  #endregion

//  #region type-import-local
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link ParseException} message;
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
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link ParseException} class.
 */
export interface ParseExceptionInit extends ExceptionInit {
  /**
   * The type of parser.
   */
  parser?: ParserType;
}
//  #endregion

//  #region feature-export-file
/**
 * An exception that occurs when a parser was unable to parse content.
 */
export class ParseException<
  T extends ParseExceptionInit = ParseExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link ParseException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
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
   * The exception code for the {@link ParseException} class.
   */
  public readonly code: number = 18;

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
