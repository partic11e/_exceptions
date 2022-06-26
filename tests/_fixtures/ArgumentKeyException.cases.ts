/**
 * Test cases for the {@link ArgumentKeyException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import type { ArgumentKeyExceptionInit } from "../../mod.ts";

export const exCode = 13;

export const exName = "ArgumentKeyException";

const argumentNames = [1, 2, 3, 4, 5].map((n) => `exampleArg${n}`);

const keys = [1, 2, 3, 4, 5].map((n) => `exampleKey${n}`);

const validKeyss = [
  [6, 7, 8].map((n) => `exampleKey${n}`),
  [9, 10, 11].map((n) => `exampleKey${n}`),
  [12, 13, 14].map((n) => `exampleKey${n}`),
];

const messages = [
  "The provided key is not found on the object or record argument.",
];

export const initCases = argumentNames.reduce((cases, argumentName, i) => {
  cases = cases.concat([[
    { argumentName },
    `Unable to locate a property key on the object or record argument "${argumentName}".`,
  ]]);

  cases = keys.reduce((innerCases, key) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { key },
        `Unable to locate the property key "${key}" on an object or record argument.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { argumentName, key },
      `Unable to locate the property key "${key}" on the object or record argument "${argumentName}".`,
    ]]);

    return validKeyss.reduce((iinnerCases, validKeys) => {
      if (!i) {
        iinnerCases = iinnerCases.concat([[
          { validKeys },
          `Unable to locate a property key on an object or record argument. Valid property keys include: "${
            validKeys.join(`", "`)
          }".`,
        ]]);
      }

      iinnerCases = iinnerCases.concat([[
        { argumentName, validKeys },
        `Unable to locate a property key on the object or record argument "${argumentName}". Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);

      iinnerCases = iinnerCases.concat([[
        { key, validKeys },
        `Unable to locate the property key "${key}" on an object or record argument. Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);

      return iinnerCases.concat([[
        { argumentName, key, validKeys },
        `Unable to locate the property key "${key}" on the object or record argument "${argumentName}". Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);
    }, innerCases);
  }, cases);

  return cases;
}, [] as [ArgumentKeyExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ArgumentKeyExceptionInit, string][]);
