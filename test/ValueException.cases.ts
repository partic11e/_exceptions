/**
 * Test cases for the {@link ValueException} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { ValueExceptionInit } from "../mod.ts";

export const exCode = 5;

export const exName = "ValueException";

const valueNames = [1, 2, 3, 4, 5].map((n) => `exampleValue${n}`);
const valueConstraintss = [
  ["number", "between 1 and 20"],
  ["string", "capital letter", "lowercase letter", "8 characters long"],
  ["number", "1 or 0"],
];
const messages = [
  "A correct type was provided, but with an incorrect value",
];

export const initCases = valueNames.reduce((cases, valueName, i) => {
  cases = cases.concat([[
    { valueName },
    `The symbol "${valueName}" has the correct type, but an invalid value.`,
  ]]);

  cases = valueConstraintss.reduce((innerCases, valueConstraints) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { valueConstraints },
        `A symbol has the correct type, but an invalid value. It has the following constraints: ${
          valueConstraints.join(", ")
        }.`,
      ]]);
    }

    return innerCases.concat([[
      { valueName, valueConstraints },
      `The symbol "${valueName}" has the correct type, but an invalid value. It has the following constraints: ${
        valueConstraints.join(", ")
      }.`,
    ]]);
  }, cases);

  return cases;
}, [] as [ValueExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ValueExceptionInit, string][]);
