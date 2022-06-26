/**
 * Test cases for the {@link ExternalException} exception.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { CodeBaseType } from "../../deps.ts";

import { CodeBase } from "../../dev_deps.ts";

import { ExternalExceptionInit } from "../../mod.ts";

export const exCode = 1;

export const exName = "ExternalException";

const externalNames = [1, 2, 3, 4, 5].map((n) => `ExampleLib-${n}`);

const externalTypes: CodeBaseType[] = [
  CodeBase.Module,
  CodeBase.Library,
  CodeBase.Framework,
  CodeBase.Extension,
  CodeBase.Plugin,
  CodeBase.Adapter,
  CodeBase.Toolkit,
  CodeBase.Sdk,
  CodeBase.Api,
  CodeBase.Platform,
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
