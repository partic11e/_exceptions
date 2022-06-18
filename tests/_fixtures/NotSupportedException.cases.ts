/**
 * Test cases for the {@link NotSupportedException} exception.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

import { NotSupportedExceptionInit } from "../../mod.ts";

export const exCode = 14;

export const exName = "NotSupportedException";

const methodNames = [1, 2, 3, 4, 5].map((n) => `exampleMethod${n}`);

const messages = [
  "A method was called that is not supported.",
];

export const initCases = methodNames.map((methodName) => {
  return [
    { methodName },
    `The method "${methodName}" is not supported.`,
  ];
}) as [NotSupportedExceptionInit, string][];

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [NotSupportedExceptionInit, string][]);
