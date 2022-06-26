/**
 * Test cases for the {@link TimeoutException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { TimeoutExceptionInit } from "../../mod.ts";

export const exCode = 3;

export const exName = "TimeoutException";

const operationNames = [1, 2, 3, 4, 5].map((n) => `exampleOperation${n}`);

const operationTimeouts = [30, 60, 5, 10, 65, 1];

const messages = [
  "An exception was caused by an operation timeout.",
];

export const initCases = operationNames.reduce((cases, operationName, i) => {
  cases = cases.concat([[
    { operationName },
    `The operation "${operationName}" timed out.`,
  ]]);

  cases = operationTimeouts.reduce((innerCases, operationTimeout) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { operationTimeout },
        `An operation timed out after ${operationTimeout} second${
          operationTimeout === 1 ? "" : "s"
        }.`,
      ]]);
    }

    return innerCases.concat([[
      { operationName, operationTimeout },
      `The operation "${operationName}" timed out after ${operationTimeout} second${
        operationTimeout === 1 ? "" : "s"
      }.`,
    ]]);
  }, cases);

  return cases;
}, [] as [TimeoutExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [TimeoutExceptionInit, string][]);
