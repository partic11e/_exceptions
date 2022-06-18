/**
 * Test cases for the {@link FormatException} exception.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

import { FormatExceptionInit } from "../../mod.ts";

export const exCode = 17;

export const exName = "FormatException";

const formatters = [1, 2, 3, 4, 5].map((n) => `formatter${n}`);

const formatExpressions = [1, 2, 3, 4, 5].map((n) => `${n}.${n ** 4}:${n * 2}`);

const messages = [
  "A format expression is invalid.",
];

export const initCases = formatters.reduce((cases, formatter, i) => {
  cases = cases.concat([[
    { formatter },
    `An expression for the formatter "${formatter}" is invalid.`,
  ]]);

  cases = formatExpressions.reduce((innerCases, formatExpression) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { formatExpression },
        `The expression for a formatter is invalid: "${formatExpression}".`,
      ]]);
    }

    return innerCases.concat([[
      { formatter, formatExpression },
      `The expression for the formatter "${formatter}" is invalid: "${formatExpression}".`,
    ]]);
  }, cases);

  return cases;
}, [] as [FormatExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [FormatExceptionInit, string][]);
