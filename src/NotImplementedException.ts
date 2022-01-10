import { Exception } from "./Exception.ts";
import { TExceptionInit } from "./types.ts";

/**
 * The default {@link NotImplementedException} message.
 */
const DEFAULT_MSG = "This method is not implemented.";

/**
 * Creates and returns an {@link NotImplementedException} message based on
 * {@link NotImplementedExceptionInit} properties.
 *
 * @param init The {@link NotImplementedExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: NotImplementedExceptionInit): string => {
  const { methodName } = init;

  return methodName
    ? `The method "${methodName}" is not implemented.`
    : DEFAULT_MSG;
};

/**
 * An interface describing the `init` properties for the
 * {@link NotImplementedException} class.
 */
export type NotImplementedExceptionInit = TExceptionInit<{
  /**
   * The name of the method that is not implemented.
   */
  methodName?: string;
}>;

/**
 * A class representing exceptions that occur when a method is not implemented.
 */
export class NotImplementedException<
  T extends NotImplementedExceptionInit = NotImplementedExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link NotImplementedException} with the default message,
   * "This method is not implemented.", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link NotImplementedException} with a message created based on
   * {@link NotImplementedExceptionInit} properties.
   *
   * @param init The {@link NotImplementedExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link NotImplementedException} with the supplied `message`,
   * optionally with additional {@link NotImplementedExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link NotImplementedExceptionInit} properties.
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
   * The exception code for the {@link NotImplementedException} class.
   */
  public readonly code: number = 15;

  //#endregion
}
