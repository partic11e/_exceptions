/**
 * Test cases for the {@link AbortedException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { OperationEnum } from "../../deps.ts";

import type { OperationType } from "../../deps.ts";

import type { AbortedExceptionInit } from "../../mod.ts";

export const exCode = 9;

export const exName = "AbortedException";

const operationNames = [
  "ClickedCreate",
  "Application",
  "AddUser",
  "HttpService",
  "PrimeProcessor",
  "InitializeAccount",
];

const operationTypes: OperationType[] = [
  OperationEnum.Action,
  OperationEnum.Build,
  OperationEnum.Operation,
  OperationEnum.Process,
  OperationEnum.Thread,
  OperationEnum.Workflow,
];

const messages = [
  "An operation was prematurely aborted.",
];

export const initCases = operationNames.reduce((cases, operationName, i) => {
  cases = cases.concat([[
    { operationName },
    `The operation "${operationName}" was aborted prematurely.`,
  ]]);
  cases = operationTypes.reduce((innerCases, operationType) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { operationType },
        `A${
          "aeiou".includes(operationType.charAt(0)) ? "n" : ""
        } ${operationType} was aborted prematurely.`,
      ]]);
    }

    return innerCases.concat([[
      { operationName, operationType },
      `The ${operationType} "${operationName}" was aborted prematurely.`,
    ]]);
  }, cases);

  return cases;
}, [] as [AbortedExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [AbortedExceptionInit, string][]);
