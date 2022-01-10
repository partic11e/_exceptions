import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link MethodException} message.
 */
const DEFAULT_MSG = "Unable to locate a method on an object.";

/**
 * Creates and returns an {@link MethodException} message based on
 * {@link MethodExceptionInit} properties.
 *
 * @param init The {@link MethodExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: MethodExceptionInit): string => {
  const { valueName, methodName, validMethods } = init;
  const toCsv = validMethods && validMethods.length &&
    validMethods.join(`", "`);

  switch (true) {
    case (!!valueName && !!methodName && !!toCsv):
      return `Unable to locate the method "${methodName}" on the object "${valueName}". Valid methods include: "${toCsv}".`;
    case (!!methodName && !!toCsv):
      return `Unable to locate the method "${methodName}" on an object. Valid methods include: "${toCsv}".`;
    case (!!valueName && !!toCsv):
      return `Unable to locate a method on the object "${valueName}". Valid methods include: "${toCsv}".`;
    case (!!valueName && !!methodName):
      return `Unable to locate the method "${methodName}" on the object "${valueName}".`;
    case (!!toCsv):
      return `Unable to locate a method on an object. Valid methods include: "${toCsv}".`;
    case (!!methodName):
      return `Unable to locate the method "${methodName}" on an object.`;
    case (!!valueName):
      return `Unable to locate a method on the object "${valueName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link MethodException} class.
 */
export interface MethodExceptionInit extends ExceptionInit {
  /**
   * The name of the symbol representing the object.
   */
  valueName?: string;

  /**
   * The method name that is not a valid method.
   */
  methodName?: string;

  /**
   * The list of valid method names.
   */
  validMethods?: string[];
}

/**
 * A class representing exceptions that occur when a method doesn't exist on an
 * object.
 */
export class MethodException<
  T extends MethodExceptionInit = MethodExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link MethodException} with the default message,
   * "Unable to locate a method on an object.", and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link MethodException} with a message created based on
   * {@link MethodExceptionInit} properties.
   *
   * @param init The {@link MethodExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link MethodException} with the supplied `message`,
   * optionally with additional {@link MethodExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link MethodExceptionInit} properties.
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
   * The exception code for the {@link MethodException} class.
   */
  public readonly code: number = 8;

  //#endregion
}
