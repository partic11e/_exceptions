import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link ValueException} message.
 */
const DEFAULT_MSG = "A symbol has the correct type, but an invalid value.";

/**
 * Creates and returns an {@link ValueException} message based on
 * {@link ValueExceptionInit} properties.
 *
 * @param init The {@link ValueExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ValueExceptionInit): string => {
  const { valueName, valueConstraints } = init;
  const toCsv = !!valueConstraints && !!valueConstraints.length &&
    valueConstraints.join(", ");

  switch (true) {
    case (!!valueName && !!toCsv):
      return `The symbol "${valueName}" has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!toCsv):
      return `A symbol has the correct type, but an invalid value. It has the following constraints: ${toCsv}.`;
    case (!!valueName):
      return `The symbol "${valueName}" has the correct type, but an invalid value.`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link ValueException} class.
 */
export interface ValueExceptionInit extends ExceptionInit {
  /**
   * The name of the symbol that has an invalid value.
   */
  valueName?: string;

  /**
   * The constraints of the value.
   */
  valueConstraints?: string[];
}

/**
 * A class representing exceptions that occur when a symbol has a correct
 * type, but has an invalid value.
 */
export class ValueException<
  T extends ValueExceptionInit = ValueExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link ValueException} with the default message,
   * "A symbol has the correct type, but an invalid value.", and no exception
   * init data.
   */
  constructor();
  /**
   * Creates a new {@link ValueException} with a message created based on
   * {@link ValueExceptionInit} properties.
   *
   * @param init The {@link ValueExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ValueException} with the supplied `message`,
   * optionally with additional {@link ValueExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ValueExceptionInit} properties.
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
   * The exception code for the {@link ValueException} class.
   */
  public readonly code: number = 5;

  //#endregion
}
