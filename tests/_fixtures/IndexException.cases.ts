/**
 * Test cases for the {@link IndexException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import type { IndexExceptionInit } from "../../mod.ts";

export const exCode = 6;

export const exName = "IndexException";

const valueNames = [1, 2, 3, 4, 5].map((n) => `exampleArray${n}`);

const indexes = [10, 11, 12, 13, 14];

const lowerBounds = [0, 1, 2, 3, 4];

const upperBounds = [5, 6, 7, 8, 9];

const [badLowerBounds, badUpperBounds] = [upperBounds, lowerBounds];

const messages = [
  "The provided index is outside the range of the array.",
];

export const initCases = valueNames.reduce((cases, valueName, i) => {
  cases = cases.concat([[
    { valueName },
    `An index is outside the bounds of the array "${valueName}".`,
  ]]);

  cases = indexes.reduce((innerCases, index) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { index },
        `The index ${index} is outside the bounds of an array.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { valueName, index },
      `The index ${index} is outside the bounds of the array "${valueName}".`,
    ]]);

    innerCases = lowerBounds.reduce((iinnerCases, lowerBound) => {
      if (!i) {
        iinnerCases = iinnerCases.concat([[
          { lowerBound },
          `An index is outside the bounds of an array. The index must be ${lowerBound} or greater.`,
        ]]);
      }

      iinnerCases = iinnerCases.concat([
        [
          { index, lowerBound },
          `The index ${index} is outside the bounds of an array. The index must be ${lowerBound} or greater.`,
        ],
        [
          { valueName, lowerBound },
          `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`,
        ],
        [
          { valueName, index, lowerBound },
          `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`,
        ],
      ]);

      iinnerCases = upperBounds.reduce((iiinnerCases, upperBound) => {
        if (!i) {
          iiinnerCases = iiinnerCases.concat([[
            { upperBound },
            `An index is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`,
          ]]);
        }

        iiinnerCases = iiinnerCases.concat([
          [
            { valueName, upperBound },
            `An index is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { index, upperBound },
            `The index ${index} is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { lowerBound, upperBound },
            `An index is outside the bounds of an array. The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
          [
            { valueName, index, upperBound },
            `The index ${index} is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { valueName, lowerBound, upperBound },
            `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
          [
            { valueName, index, lowerBound, upperBound },
            `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
        ]);

        return iiinnerCases;
      }, iinnerCases);

      return iinnerCases;
    }, innerCases);

    return innerCases;
  }, cases);

  return cases;
}, [] as [IndexExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [IndexExceptionInit, string][]);

export const badLowerUpperBoundCases = badUpperBounds.reduce(
  (cases, upperBound) => {
    return badLowerBounds.reduce((innerCases, lowerBound) => {
      return innerCases.concat([[
        { lowerBound, upperBound },
        `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
      ]]);
    }, cases);
  },
  [] as [IndexExceptionInit, string][],
);
