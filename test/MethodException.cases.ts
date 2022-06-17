/**
 * Test cases for the {@link MethodException} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { MethodExceptionInit } from "../mod.ts";

export const exCode = 8;

export const exName = "MethodException";

const valueNames = [1, 2, 3, 4, 5].map((n) => `exampleValue${n}`);

const methodNames = [1, 2, 3, 4, 5].map((n) => `exampleMethod${n}`);
const validMethodss = [
  [6, 7, 8].map((n) => `exampleMethods${n}`),
  [9, 10, 11].map((n) => `exampleMethods${n}`),
  [12, 13, 14].map((n) => `exampleMethods${n}`),
];

const messages = [
  "The provided method is not found on the object or record.",
];

export const initCases = valueNames.reduce((cases, valueName, i) => {
  cases = cases.concat([[
    { valueName },
    `Unable to locate a method on the object "${valueName}".`,
  ]]);

  cases = methodNames.reduce((innerCases, methodName) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { methodName },
        `Unable to locate the method "${methodName}" on an object.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { valueName, methodName },
      `Unable to locate the method "${methodName}" on the object "${valueName}".`,
    ]]);

    return validMethodss.reduce((iinnerCases, validMethods) => {
      if (!i) {
        iinnerCases = iinnerCases.concat([[
          { validMethods },
          `Unable to locate a method on an object. Valid methods include: "${
            validMethods.join(`", "`)
          }".`,
        ]]);
      }

      iinnerCases = iinnerCases.concat([[
        { valueName, validMethods },
        `Unable to locate a method on the object "${valueName}". Valid methods include: "${
          validMethods.join(`", "`)
        }".`,
      ]]);

      iinnerCases = iinnerCases.concat([[
        { methodName, validMethods },
        `Unable to locate the method "${methodName}" on an object. Valid methods include: "${
          validMethods.join(`", "`)
        }".`,
      ]]);

      return iinnerCases.concat([[
        { valueName, methodName, validMethods },
        `Unable to locate the method "${methodName}" on the object "${valueName}". Valid methods include: "${
          validMethods.join(`", "`)
        }".`,
      ]]);
    }, innerCases);
  }, cases);

  return cases;
}, [] as [MethodExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [MethodExceptionInit, string][]);
