/**
 * Test cases for the {@link DecoratorException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { DecoratorEnum } from "../../deps.ts";

import type { DecoratorType } from "../../deps.ts";

import type { DecoratorExceptionInit } from "../../mod.ts";

export const exCode = 10;

export const exName = "DecoratorException";

const decoratorNames = [1, 2, 3, 4, 5].map((n) => `ExampleDecorator${n}`);

const decoratorTypes: DecoratorType[] = [
  DecoratorEnum.Class,
  DecoratorEnum.Method,
  DecoratorEnum.Accessor,
  DecoratorEnum.Property,
  DecoratorEnum.Parameter,
];

const messages = [
  "The provided key is not found on the object or record argument.",
];

export const initCases = decoratorNames.reduce((cases, decoratorName, i) => {
  cases = cases.concat([[
    { decoratorName },
    `The decorator "${decoratorName}" failed to apply.`,
  ]]);

  cases = decoratorTypes.reduce((innerCases, decoratorType) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { decoratorType },
        `${
          "aeiou".includes(decoratorType.charAt(0)) ? "An" : "A"
        } ${decoratorType} decorator failed to apply.`,
      ]]);
    }

    return innerCases.concat([[
      { decoratorType, decoratorName },
      `The ${decoratorType} decorator "${decoratorName}" failed to apply.`,
    ]]);
  }, cases);

  return cases;
}, [] as [DecoratorExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [DecoratorExceptionInit, string][]);
