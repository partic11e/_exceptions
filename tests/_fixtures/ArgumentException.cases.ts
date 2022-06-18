/**
 * Test cases for the {@link ArgumentException} exception.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

import { ArgumentExceptionInit } from "../../mod.ts";

export const exCode = 11;

export const exName = "ArgumentException";

const argumentNames = [1, 2, 3, 4, 5].map((n) => `exampleArg${n}`);

const argumentConstraintss = [
  ["number", "between 1 and 20"],
  ["string", "capital letter", "lowercase letter", "8 characters long"],
  ["number", "1 or 0"],
];

const messages = [
  "A correct type was provided, but with an incorrect value",
];

export const initCases = argumentNames.reduce((cases, argumentName, i) => {
  cases = cases.concat([[
    { argumentName },
    `The argument "${argumentName}" has the correct type, but an invalid value.`,
  ]]);

  cases = argumentConstraintss.reduce((innerCases, argumentConstraints) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { argumentConstraints },
        `An argument has the correct type, but an invalid value. It has the following constraints: ${
          argumentConstraints.join(", ")
        }.`,
      ]]);
    }

    return innerCases.concat([[
      { argumentName, argumentConstraints },
      `The argument "${argumentName}" has the correct type, but an invalid value. It has the following constraints: ${
        argumentConstraints.join(", ")
      }.`,
    ]]);
  }, cases);

  return cases;
}, [] as [ArgumentExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ArgumentExceptionInit, string][]);
