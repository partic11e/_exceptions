import { Exception, ExceptionInit } from "./Exception.ts";
import type { DecoratorType } from "../deps.ts";

/**
 * The default {@link DecoratorException} message.
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

/**
 * A class representing exceptions that occur when an operation has been
 * prematurely aborted.
 */
export class DecoratorException<
  T extends DecoratorExceptionInit = DecoratorExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link DecoratorException} with the default message,
   * "A decorator failed to apply.", and no exception init data.
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
   * The exception code for the {@link DecoratorException} class.
   */
  public readonly code: number = 10;

  //#endregion
}
