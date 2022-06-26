/**
 * Contains the ExternalException class and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { Exception } from "./Exception.ts";
//  #endregion

//  #region type-import-remote
import type { CodeBaseType } from "../../deps.ts";
//  #endregion

//  #region type-import-local
import type { ExceptionInit } from "./Exception.ts";
//  #endregion

//  #region constants-local
/**
 * The default {@link ExternalException} message;
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
//  #endregion

//  #region type-export-file
/**
 * An interface describing the `init` properties for the
 * {@link ExternalException} class.
 */
export interface ExternalExceptionInit extends ExceptionInit {
  /**
   * The name of the external codebase that caused the underlying exception.
   */
  externalName?: string;
  /**
   * The type of codebase that caused the underlying exception.
   */
  externalType?: CodeBaseType;
}
//  #endregion

// #region feature-export-file
/**
 * An exception that occurs when non-user defined code throws an exception.
 */
export class ExternalException<
  T extends ExternalExceptionInit = ExternalExceptionInit,
> extends Exception<T> {
  //  #region static-properties
  //  #endregion

  //  #region static-methods
  //  #endregion

  //  #region constructors
  /**
   * Creates a new {@link ExternalException} with the default message,
   * "An unexpected error occurred", and no
   * exception init data.
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
  //  #endregion

  //  #region properties
  /**
   * The exception code for the {@link ExternalException} class.
   */
  public readonly code: number = 1;

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
// #endregion
