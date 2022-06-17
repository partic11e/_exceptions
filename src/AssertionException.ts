/**
 * Contains the class and types for creating an {@link AssertionException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { TExceptionInit } from "./types.ts";

import { Exception } from "./Exception.ts";

/**
 * An interface describing the `init` properties for the
 * {@link AssertionException} class.
 */
export type AssertionExceptionInit = TExceptionInit<Record<string, unknown>>;

/**
 * A class representing exceptions that occur when assertions fail.
 */
export class AssertionException<
  T extends AssertionExceptionInit = AssertionExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link AssertionException} class.
   */
  public readonly code: number = 2;

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
}
