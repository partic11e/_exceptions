/**
 * Contains the DecoratorException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
import type { DecoratorType } from "../../deps.ts";
//  #endregion

//  #region type-import-local
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link DecoratorException} message;
 */
const DEFAULT_MSG = "A decorator failed to apply.";

/**
 * Creates and returns an {@link DecoratorException} message based on
 * {@link DecoratorExceptionInit} properties.
 *
 * @param init The {@link DecoratorExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: DecoratorExceptionInit): string => {
  const { decoratorName, decoratorType } = init;
  const a = decoratorType && "aeiou".includes(decoratorType.charAt(0))
    ? "An"
    : "A";

  switch (true) {
    case (!!decoratorName && !!decoratorType):
      return `The ${decoratorType} decorator "${decoratorName}" failed to apply.`;
    case (!!decoratorType):
      return `${a} ${decoratorType} decorator failed to apply.`;
    case (!!decoratorName):
      return `The decorator "${decoratorName}" failed to apply.`;
    default:
      return DEFAULT_MSG;
  }
};

//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link DecoratorException} class.
 */
export interface DecoratorExceptionInit extends ExceptionInit {
  /**
   * The name of the decorator that failed to apply
   */
  decoratorName?: string;

  /**
   * The type of decorator that failed to apply.
   */
  decoratorType?: DecoratorType;
}
//  #endregion

// #region feature-export-file
/**
 * An exception that occurs when a decorator fails to apply.
 */
export class DecoratorException<
  T extends DecoratorExceptionInit = DecoratorExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link DecoratorException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link DecoratorException} with a message created based on
   * {@link DecoratorExceptionInit} properties.
   *
   * @param init The {@link DecoratorExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link DecoratorException} with the supplied `message`,
   * optionally with additional {@link DecoratorExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link DecoratorExceptionInit} properties.
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
   * The exception code for the {@link DecoratorException} class.
   */
  public readonly code: number = 10;

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
