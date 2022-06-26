/**
 * Test cases for the {@link ExternalException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { CodeBaseEnum } from "../../deps.ts";

import type { CodeBaseType } from "../../deps.ts";

import type { ExternalExceptionInit } from "../../mod.ts";

export const exCode = 1;

export const exName = "ExternalException";

const externalNames = [1, 2, 3, 4, 5].map((n) => `ExampleLib-${n}`);

const externalTypes: CodeBaseType[] = [
  CodeBaseEnum.Module,
  CodeBaseEnum.Library,
  CodeBaseEnum.Framework,
  CodeBaseEnum.Extension,
  CodeBaseEnum.Plugin,
  CodeBaseEnum.Adapter,
  CodeBaseEnum.Toolkit,
  CodeBaseEnum.Sdk,
  CodeBaseEnum.Api,
  CodeBaseEnum.Platform,
];

const messages = [
  "An exception was caused by external code.",
];

export const initCases = externalNames.reduce((cases, externalName, i) => {
  cases = cases.concat([[
    { externalName },
    `The external codebase "${externalName}" raised an exception.`,
  ]]);

  cases = externalTypes.reduce((innerCases, externalType) => {
    if (!i) {
      innerCases = innerCases.concat([[
        { externalType },
        `An external ${externalType} raised an exception.`,
      ]]);
    }

    return innerCases.concat([[
      { externalType, externalName },
      `The external ${externalType} "${externalName}" raised an exception.`,
    ]]);
  }, cases);

  return cases;
}, [] as [ExternalExceptionInit, string][]);

export const messageCases = messages.map((message) => [message]);

export const allCases = initCases.reduce((cases, [data]) => {
  return messages.reduce((innerCases, message) => {
    return innerCases.concat([[data, message]]);
  }, cases);
}, [] as [ExternalExceptionInit, string][]);
