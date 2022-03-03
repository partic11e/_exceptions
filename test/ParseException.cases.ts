/**
 * Test cases for the {@link ParseException} exception.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { ParseExceptionInit } from "../mod.ts";

export const exCode = 18;

export const exName = "ParseException";

const parsers = ["JSON", "DateTime", "YAML", "CSV"];

const messages = [
  "The parser failed to parse.",
];

export const initCases = parsers.map((parser) => {
  return [
    { parser },
    `The parser "${parser}" was unable to parser content.`,
  ];
}) as [ParseExceptionInit, string][];

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ParseExceptionInit, string][]);
