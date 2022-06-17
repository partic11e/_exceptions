/**
 * Contains the class and types for creating an {@link IndexException}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Exception, ExceptionInit } from "./Exception.ts";
import { ValueException } from "./ValueException.ts";

/**
 * The default {@link IndexException} message.
 */
const DEFAULT_MSG = "An index is outside the bounds of an array.";

const validateBoundaries = (lower: number, upper: number): void => {
  if (upper <= lower) {
    throw new ValueException({
      valueName: "init.upperBound",
      valueConstraints: ["positive integer", "greater than init.lowerBound"],
    });
  }
};

/**
 * Creates and returns an {@link IndexException} message based on
 * {@link IndexExceptionInit} properties.
 *
 * @param init The {@link IndexExceptionInit} information.
 * @returns The message constructed from `init`.
 */
const msgFromInit = (init: IndexExceptionInit): string => {
  const { valueName, index, lowerBound, upperBound } = init;

  switch (true) {
    case (!!valueName && typeof index === "number" &&
      typeof lowerBound === "number" && typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (!!valueName && typeof lowerBound === "number" &&
      typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (!!valueName && typeof index === "number" &&
      typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `The index ${index} is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`;
    }
    case (!!valueName && typeof index === "number" &&
      typeof lowerBound === "number"):
      return `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`;
    case (typeof lowerBound === "number" && typeof upperBound === "number"): {
      validateBoundaries(lowerBound!, upperBound!);

      return `An index is outside the bounds of an array. The index must be ${lowerBound} or ${upperBound}, or between them.`;
    }
    case (typeof index === "number" && typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `The index ${index} is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`;
    }
    case (typeof index === "number" && typeof lowerBound === "number"): {
      return `The index ${index} is outside the bounds of an array. The index must be ${lowerBound} or greater.`;
    }
    case (!!valueName && typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `An index is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`;
    }
    case (!!valueName && typeof lowerBound === "number"):
      return `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`;
    case (!!valueName && typeof index === "number"):
      return `The index ${index} is outside the bounds of the array "${valueName}".`;
    case (typeof upperBound === "number"): {
      validateBoundaries(0, upperBound!);

      return `An index is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`;
    }
    case (typeof lowerBound === "number"):
      return `An index is outside the bounds of an array. The index must be ${lowerBound} or greater.`;
    case (typeof index === "number"):
      return `The index ${index} is outside the bounds of an array.`;
    case (!!valueName):
      return `An index is outside the bounds of the array "${valueName}".`;
    default:
      return DEFAULT_MSG;
  }
};

/**
 * An interface describing the `init` properties for the
 * {@link IndexException} class.
 */
export interface IndexExceptionInit extends ExceptionInit {
  /**
   * The index that is outside the bounds of the array.
   */
  index?: number;

  /**
   * The lower bound of the array. Usually `0`, but can be any integer lower than the `upperBound`.
   */
  lowerBound?: number;

  /**
   * The upper bound of the array. Can be any integer higher `lowerBound`.
   */
  upperBound?: number;
  /**
   * The name of the symbol representing the array.
   */

  valueName?: string;
}

/**
 * A class representing exceptions that occur when an index is outside the
 * bounds of an array.
 */
export class IndexException<
  T extends IndexExceptionInit = IndexExceptionInit,
> extends Exception<T> {
  /**
   * The exception code for the {@link IndexException} class.
   */
  public readonly code: number = 6;

  /**
   * Creates a new {@link IndexException} with the default message,
   * "An index is outside the bounds of an array.", and no exception
   * init data.
   */
  constructor();
  /**
   * Creates a new {@link IndexException} with a message created based on
   * {@link IndexExceptionInit} properties.
   *
   * @param init The {@link IndexExceptionInit} properties.
   */
  constructor(init: T);
  /**
   * Creates a new {@link IndexException} with the supplied `message`,
   * optionally with additional {@link IndexExceptionInit} properties.
   *
   * ***NOTE: `message` is not altered by the `init` properties.***
   *
   * @param message A message describing the exception.
   * @param init The {@link IndexExceptionInit} properties.
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
