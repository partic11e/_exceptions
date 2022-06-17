/**
 * Test cases for the {@link KeyException} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { KeyExceptionInit } from "../mod.ts";

export const exCode = 7;

export const exName = "KeyException";

const valueNames = [1, 2, 3, 4, 5].map((n) => `exampleValue${n}`);

const keys = [1, 2, 3, 4, 5].map((n) => `exampleKey${n}`);
const validKeyss = [
  [6, 7, 8].map((n) => `exampleKey${n}`),
  [9, 10, 11].map((n) => `exampleKey${n}`),
  [12, 13, 14].map((n) => `exampleKey${n}`),
];

const messages = [
  "The provided key is not found on the object or record.",
];

export const initCases = valueNames.reduce((cases, valueName, i) => {
  cases = cases.concat([[
    { valueName },
    `Unable to locate a property key on the object or record "${valueName}".`,
  ]]);

  cases = keys.reduce((innerCases, key) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { key },
        `Unable to locate the property key "${key}" on an object or record.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { valueName, key },
      `Unable to locate the property key "${key}" on the object or record "${valueName}".`,
    ]]);

    return validKeyss.reduce((iinnerCases, validKeys) => {
      if (!i) {
        iinnerCases = iinnerCases.concat([[
          { validKeys },
          `Unable to locate a property key on an object or record. Valid property keys include: "${
            validKeys.join(`", "`)
          }".`,
        ]]);
      }

      iinnerCases = iinnerCases.concat([[
        { valueName, validKeys },
        `Unable to locate a property key on the object or record "${valueName}". Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);

      iinnerCases = iinnerCases.concat([[
        { key, validKeys },
        `Unable to locate the property key "${key}" on an object or record. Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);

      return iinnerCases.concat([[
        { valueName, key, validKeys },
        `Unable to locate the property key "${key}" on the object or record "${valueName}". Valid property keys include: "${
          validKeys.join(`", "`)
        }".`,
      ]]);
    }, innerCases);
  }, cases);

  return cases;
}, [] as [KeyExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [KeyExceptionInit, string][]);
