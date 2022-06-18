/**
 * Test cases for the {@link RecursionException} exception.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

import { RecursionExceptionInit } from "../../mod.ts";

export const exCode = 4;

export const exName = "RecursionException";

const operationNames = [1, 2, 3, 4, 5].map((n) => `exampleOperation${n}`);

const recursionLimits = [1, 2, 3, 4, 5];

const consecutiveRepeatingValuess = [false, true];

const messages = [
  "An operation went on for too long.",
];

//  test cases
export const initCases = operationNames.reduce((cases, operationName, i) => {
  cases = cases.concat([[
    { operationName },
    `The operation "${operationName}" exceeded the maximum recursion depth.`,
  ]]);

  cases = recursionLimits.reduce((innerCases, recursionLimit) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { recursionLimit },
        `An operation exceeded the maximum recursion depth of ${recursionLimit}.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { operationName, recursionLimit },
      `The operation "${operationName}" exceeded the maximum recursion depth of ${recursionLimit}.`,
    ]]);

    return consecutiveRepeatingValuess.reduce(
      (iinnerCases, consecutiveRepeatingValues) => {
        if (!i) {
          iinnerCases = iinnerCases.concat([[
            { consecutiveRepeatingValues },
            consecutiveRepeatingValues
              ? `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values.`
              : `An operation exceeded the maximum recursion depth.`,
          ]]);
        }

        iinnerCases = iinnerCases.concat([[
          { operationName, consecutiveRepeatingValues },
          consecutiveRepeatingValues
            ? `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values.`
            : `The operation "${operationName}" exceeded the maximum recursion depth.`,
        ]]);

        iinnerCases = iinnerCases.concat([[
          { recursionLimit, consecutiveRepeatingValues },
          consecutiveRepeatingValues
            ? `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${
              recursionLimit > 1 ? "s" : ""
            }.`
            : `An operation exceeded the maximum recursion depth of ${recursionLimit}.`,
        ]]);

        return iinnerCases.concat([[
          { operationName, recursionLimit, consecutiveRepeatingValues },
          consecutiveRepeatingValues
            ? `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${
              recursionLimit > 1 ? "s" : ""
            }.`
            : `The operation "${operationName}" exceeded the maximum recursion depth of ${recursionLimit}.`,
        ]]);
      },
      innerCases,
    );
  }, cases);

  return cases;
}, [] as [RecursionExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [RecursionExceptionInit, string][]);
