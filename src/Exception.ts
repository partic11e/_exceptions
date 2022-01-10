import { IExceptionInit, TExceptionInit } from "./types.ts";
import {
  ExceptionSerializationData as esd,
  I11N_EXC_KB,
} from "./_constants.ts";

/**
 * An interface describing the `init` properties for the {@link Exception}
 * class.
 */
export type ExceptionInit = TExceptionInit;

/**
 * A class representing exceptions that occur during the execution of an
 * application.
 *
 * All particle11 exception classes derive from this class.
 */
export class Exception<T extends IExceptionInit = ExceptionInit> extends Error {
  //#region Constructors

  /**
   * Creates a new {@link Exception} instance with a message describing the
   * exception, optionally with additional exception information.
   *
   * @param message A message describing the exception.
   * @param init Additional exception information.
   */
  constructor(message: string, protected init?: T) {
    super(message);
  }
  //#endregion
  //#region Public properties

  /**
   * The exception code for the {@link Exception} class.
   */
  public readonly code: number = 0;

  /**
   * The friendly name of the {@link Exception}.
   */
  public readonly name = this.constructor.name;

  /**
   * The underlying, or specific cause, of the exception.
   *
   * This is typically available when catching and re-throwing an exception or
   * error. Its value is passed in the {@link ExceptionInit} `cause` property,
   * during the creation of the {@link Exception} instance.
   */
  public get cause(): Error | Exception | undefined {
    const { init } = this;

    return init?.cause;
  }

  /**
   * The additional data excluding `cause` from the {@link ExceptionInit}.
   *
   * This data is used to more specifically identify the cause of an exception.
   * This data differs between exceptions, relating to the specifics of each
   * exception.
   */
  public get data(): Omit<T, "cause"> | undefined {
    const { init } = this;

    if (!init) return void 0;

    //  deno-lint-ignore no-unused-vars
    const { cause, ...data } = init;
    const hasData = !!Object.keys(data).length;

    return hasData ? data : undefined;
  }

  /**
   * The URL referencing a resource to assist with this {@link Exception}.
   */
  public get helpUrl(): string {
    const { message, code } = this;
    const msg = encodeURIComponent(message);
    const data = this.getUrlEncodedData();
    const causes = this.getUrlEncodedCauses();

    return `${I11N_EXC_KB}/0x${
      code.toString(16)
    }?${esd.message}=${msg}${data}${causes}`;
  }

  //#endregion

  //#region Native overrides

  /**
   * Returns the primitive value of the {@link Excpetion}.
   *
   * This primitive value is the {@link Exception} `code` property.
   *
   * @returns The {@link Exception} `code` property.
   */
  public override valueOf(): number {
    return this.code;
  }

  /**
   * Returns a string representation of the {@link Exception}.
   *
   * This representation includes the {@link Exception} `name`, `code`, and
   * `message` properties formatted to be easily readable.
   *
   * @returns A string representation of the {@link Exception}.
   */
  public override toString(): string {
    const { name, code, message } = this;

    return `${name} [0x${code.toString(16)}]: ${message}`;
  }

  //#endregion
  //#region Protected methods

  /**
   * Returns a querystring parameter containing {@link data} in a URL-encoded
   * JSON string; or if no {@link data}, an empty string.
   *
   * Used to construct a portion of {@link helpUrl}.
   *
   * @returns A querystring parameter containing {@link data} in a URL-encoded
   * JSON string, or an empty string.
   */
  protected getUrlEncodedData(): string {
    const { data } = this;

    if (!data || !Object.keys(data).length) return "";

    return `&${esd.data}=${encodeURIComponent(JSON.stringify(data))}`;
  }

  /**
   * Returns a querystring parameter containing the {@link cause} tree in a
   * URL-encoded JSON string; or if no {@link cause}, an empty string.
   *
   * Used to construct a portion of {@link helpUrl}.
   *
   * @returns A querystring parameter containing the {@link cause} in a
   * URL-encoded JSON string, or an empty string.
   */
  protected getUrlEncodedCauses(): string {
    const { cause } = this;

    if (!cause) return "";

    const data = {
      //  name
      [esd.name]: cause.name,
      //  mesage
      [esd.message]: cause.message,
      //  helpURL
      [esd.helpUrl]: cause instanceof Exception ? cause.helpUrl : "",
    };

    return `&${esd.cause}=${encodeURIComponent(JSON.stringify(data))}`;
  }

  //#endregion
}
