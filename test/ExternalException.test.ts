/**
 * Tests the features of the {@link ExternalException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { CodeBaseType } from "../deps.ts";

import { assertEquals, CodeBase } from "../dev_deps.ts";

import { ExternalException, ExternalExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 1;
const exName = "ExternalException";
const externalName = "Lib3rdy";
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

Deno.test("ExternalException()", () => {
  const exMsg = "An external codebase raised an exception.";
  const ex = new ExternalException();
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ExternalException({externalName})", () => {
  const exMsg = `The external codebase "${externalName}" raised an exception.`;
  const data: ExternalExceptionInit = { externalName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ExternalException(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ExternalException({externalType})", () => {
  externalTypes.forEach((externalType) => {
    const exMsg = `An external ${externalType} raised an exception.`;
    const data: ExternalExceptionInit = { externalType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new ExternalException(data);
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
      encodeURIComponent(exMsg)
    }&${esd.data}=${dataEncoded}`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.data, data);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
  });
});

Deno.test("ExternalException({externalName, externalType})", () => {
  externalTypes.forEach((externalType) => {
    const exMsg =
      `The external ${externalType} "${externalName}" raised an exception.`;
    const data: ExternalExceptionInit = { externalName, externalType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new ExternalException(data);
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
      encodeURIComponent(exMsg)
    }&${esd.data}=${dataEncoded}`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.data, data);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
  });
});

Deno.test("ExternalException(message)", () => {
  const exMsg = "An exception was caused by external code.";
  const ex = new ExternalException(exMsg);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ExternalException(message, {externalName, externalType})", () => {
  const exMsg = `An exception was caused by external code.`;

  externalTypes.forEach((externalType) => {
    const data: ExternalExceptionInit = { externalName, externalType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new ExternalException(exMsg, data);
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
      encodeURIComponent(exMsg)
    }&${esd.data}=${dataEncoded}`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.data, data);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
  });
});
