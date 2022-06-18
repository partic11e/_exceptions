/**
 * Contains the class and types for creating an {@link ArgumentIndexException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";
import { ValueException } from "./ValueException.ts";

/**
 * The default {@link ArgumentIndexException} message.
 */
const DEFAULT_MSG = "An index is outside the bounds of an array argument.";

/**
 * Validates that the the upper bound is greater than the lower bound of an
 * index range.
 *
 * @param lower The lower bound of the index range.
 * @param upper The lower bound of the index range
 */
const validateBoundaries = (lower: number, upper: number): void => {
  if (upper <= lower) {
    throw new ValueException({
      valueName: "init.upperBound",
      valueConstraints: ["positive integer", "greater than init.lowerBound"],
    });
  }
};

/**
 * Creates and returns an {@link ArgumentIndexException} message based on
 * {@link ArgumentIndexExceptionInit} properties.
 *
 * @param init The {@link ArgumentIndexExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: ArgumentIndexExceptionInit): string => {
  const { argumentName, index, lowerBound, upperBound } = init;

  switch (true) {
    case (!!argumentName && typeof index === "number" &&
      typeof lowerBound === "number" && typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (!!argumentName && typeof lowerBound === "number" &&
      typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (!!argumentName && typeof index === "number" &&
      typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`;
    }
    case (!!argumentName && typeof index === "number" &&
      typeof lowerBound === "number"):
      return `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`;
    case (typeof lowerBound === "number" && typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `An index is outside the bounds of an array argument. The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (typeof index === "number" && typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `The index ${index} is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`;
    }
    case (typeof index === "number" && typeof lowerBound === "number"): {
      return `The index ${index} is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`;
    }
    case (!!argumentName && typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `An index is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`;
    }
    case (!!argumentName && typeof lowerBound === "number"):
      return `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`;
    case (!!argumentName && typeof index === "number"):
      return `The index ${index} is outside the bounds of the array argument "${argumentName}".`;
    case (typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `An index is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`;
    }
    case (typeof lowerBound === "number"):
      return `An index is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`;
    case (typeof index === "number"):
      return `The index ${index} is outside the bounds of an array argument.`;
    case (!!argumentName):
      return `An index is outside the bounds of the array argument "${argumentName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link ArgumentIndexException} class.
 */
export interface ArgumentIndexExceptionInit extends ExceptionInit {
  /**
   * The name of the argument representing the array.
   */
  argumentName?: string;

  /**
   * The index that is outside the bounds of the array argument.
   */
  index?: number;

  /**
   * The lower bound of the array argument. Usually `0`, but can be any integer lower than the `upperBound`.
   */
  lowerBound?: number;

  /**
   * The upper bound of the array argument. Can be any integer higher `lowerBound`.
   */
  upperBound?: number;
}

/**
 * A class representing exceptions that occur when an index is outside the
 * bounds of an array argument.
 */
export class ArgumentIndexException<
  T extends ArgumentIndexExceptionInit = ArgumentIndexExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link ArgumentIndexException} class.
   */
  public readonly code: number = 12;

  /**
   * Creates a new {@link ArgumentIndexException} with the default message,
   * "An index is outside the bounds of an array argument.",
   * and no exception init data.
   */
  constructor();
  /**
   * Creates a new {@link ArgumentIndexException} with a message created based on
   * {@link ArgumentIndexExceptionInit} properties.
   *
   * @param init The {@link ArgumentIndexExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link ArgumentIndexException} with the supplied `message`,
   * optionally with additional {@link ArgumentIndexExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link ArgumentIndexExceptionInit} properties.
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
}
