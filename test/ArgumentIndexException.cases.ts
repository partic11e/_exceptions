/**
 * Test cases for the {@link ArgumentIndexException} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { ArgumentIndexExceptionInit } from "../mod.ts";

export const exCode = 12;

export const exName = "ArgumentIndexException";

const argumentNames = [1, 2, 3, 4, 5].map((n) => `exampleArg${n}`);

const indexes = [10, 11, 12, 13, 14];

const lowerBounds = [0, 1, 2, 3, 4];

const upperBounds = [5, 6, 7, 8, 9];

const [badLowerBounds, badUpperBounds] = [upperBounds, lowerBounds];

const messages = [
  "The provided index is outside the range of the array argument.",
];

export const initCases = argumentNames.reduce((cases, argumentName, i) => {
  cases = cases.concat([[
    { argumentName },
    `An index is outside the bounds of the array argument "${argumentName}".`,
  ]]);

  cases = indexes.reduce((innerCases, index) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { index },
        `The index ${index} is outside the bounds of an array argument.`,
      ]]);
    }

    innerCases = innerCases.concat([[
      { argumentName, index },
      `The index ${index} is outside the bounds of the array argument "${argumentName}".`,
    ]]);

    innerCases = lowerBounds.reduce((iinnerCases, lowerBound) => {
      if (!i) {
        iinnerCases = iinnerCases.concat([[
          { lowerBound },
          `An index is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`,
        ]]);
      }

      iinnerCases = iinnerCases.concat([
        [
          { index, lowerBound },
          `The index ${index} is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`,
        ],
        [
          { argumentName, lowerBound },
          `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`,
        ],
        [
          { argumentName, index, lowerBound },
          `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`,
        ],
      ]);

      iinnerCases = upperBounds.reduce((iiinnerCases, upperBound) => {
        if (!i) {
          iiinnerCases = iiinnerCases.concat([[
            { upperBound },
            `An index is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`,
          ]]);
        }

        iiinnerCases = iiinnerCases.concat([
          [
            { argumentName, upperBound },
            `An index is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { index, upperBound },
            `The index ${index} is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { lowerBound, upperBound },
            `An index is outside the bounds of an array argument. The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
          [
            { argumentName, index, upperBound },
            `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`,
          ],
          [
            { argumentName, lowerBound, upperBound },
            `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
          [
            { argumentName, index, lowerBound, upperBound },
            `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`,
          ],
        ]);

        return iiinnerCases;
      }, iinnerCases);

      return iinnerCases;
    }, innerCases);

    return innerCases;
  }, cases);

  return cases;
}, [] as [ArgumentIndexExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ArgumentIndexExceptionInit, string][]);

export const badLowerUpperBoundCases = badUpperBounds.reduce(
  (cases, upperBound) => {
    return badLowerBounds.reduce((innerCases, lowerBound) => {
      return innerCases.concat([[
        { lowerBound, upperBound },
        `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
      ]]);
    }, cases);
  },
  [] as [ArgumentIndexExceptionInit, string][],
);
