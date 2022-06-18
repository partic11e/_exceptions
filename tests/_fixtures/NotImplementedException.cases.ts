/**
 * Test cases for the {@link NotImplementedException} exception.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

import { NotImplementedExceptionInit } from "../../mod.ts";

export const exCode = 15;

export const exName = "NotImplementedException";

const methodNames = [1, 2, 3, 4, 5].map((n) => `exampleMethod${n}`);

const messages = [
  "A method was called that is not implemented.",
];

export const initCases = methodNames.map((methodName) => {
  return [
    { methodName },
    `The method "${methodName}" is not implemented.`,
  ];
}) as [NotImplementedExceptionInit, string][];

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [NotImplementedExceptionInit, string][]);
