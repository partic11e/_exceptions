import { Exception } from "./Exception.ts";
import { TExceptionInit } from "./types.ts";

/**
 * An interface describing the `init` properties for the
 * {@link AssertionException} class.
 */
// TODO: Maybe add expected properties?
export type AssertionExceptionInit = TExceptionInit<Record<string, unknown>>;

/**
 * A class representing exceptions that occur when assertions fail.
 */
export class AssertionException<
  T extends AssertionExceptionInit = AssertionExceptionInit,
> extends Exception<T> {
  //#region Constructors

  //  Implementing for docs only as it has the same signature as `Exception`.
  /**
   * Creates a new {@link AssertionException} with the supplied `message`,
   * optionally with additional {@link AssertionExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link AssertionExceptionInit} properties.
   */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  //#endregion
  //#region Public properties

  /**
   * The exception code for the {@link AssertionException} class.
   */
  public readonly code: number = 2;

  //#endregion
}
