import { Exception, ExceptionInit } from "./Exception.ts";

/**
 * The default {@link KeyException} message.
 */
const DEFAULT_MSG = "Unable to locate a property key on an object or record.";

/**
 * Creates and returns an {@link KeyException} message based on
 * {@link KeyExceptionInit} properties.
 *
 * @param init The {@link KeyExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: KeyExceptionInit): string => {
  const { valueName, key, validKeys } = init;
  const toCsv = validKeys && validKeys.length && validKeys.join(`", "`);

  switch (true) {
    case (!!valueName && !!key && !!toCsv):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}". Valid property keys include: "${toCsv}".`;
    case (!!key && !!toCsv):
      return `Unable to locate the property key "${key}" on an object or record. Valid property keys include: "${toCsv}".`;
    case (!!valueName && !!toCsv):
      return `Unable to locate a property key on the object or record "${valueName}". Valid property keys include: "${toCsv}".`;
    case (!!valueName && !!key):
      return `Unable to locate the property key "${key}" on the object or record "${valueName}".`;
    case (!!toCsv):
      return `Unable to locate a property key on an object or record. Valid property keys include: "${toCsv}".`;
    case (!!key):
      return `Unable to locate the property key "${key}" on an object or record.`;
    case (!!valueName):
      return `Unable to locate a property key on the object or record "${valueName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link KeyException} class.
 */
export interface KeyExceptionInit extends ExceptionInit {
  /**
   * The name of the symbol representing the object or record.
   */
  valueName?: string;

  /**
   * The key that is not a valid key.
   */
  key?: string;

  /**
   * The list of valid keys.
   */
  validKeys?: string[];
}

/**
 * A class representing exceptions that occur when a property key doesn't exist
 * on an object or record.
 */
export class KeyException<
  T extends KeyExceptionInit = KeyExceptionInit,
> extends Exception<T> {
  //#region Constructors

  /**
   * Creates a new {@link KeyException} with the default message,
   * "Unable to locate a property key on an object or record.", and no
   * exception init data.
   */
  constructor();
  /**
   * Creates a new {@link KeyException} with a message created based on
   * {@link KeyExceptionInit} properties.
   *
   * @param init The {@link KeyExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link KeyException} with the supplied `message`,
   * optionally with additional {@link KeyExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link KeyExceptionInit} properties.
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
   * The exception code for the {@link KeyException} class.
   */
  public readonly code: number = 7;

  //#endregion
}
