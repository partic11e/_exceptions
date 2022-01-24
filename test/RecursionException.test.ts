/**
 * Tests the features of the {@link RecursionException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals } from "../dev_deps.ts";

import { RecursionException, RecursionExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 4;
const exName = "RecursionException";
const operationName = "fibNum";
const recursionLimit = 100;

Deno.test("RecursionException()", () => {
  const exMsg = "An operation exceeded the maximum recursion depth.";
  const ex = new RecursionException();
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

Deno.test("RecursionException({operationName})", () => {
  const exMsg =
    `The operation "${operationName}" exceeded the maximum recursion depth.`;
  const data: RecursionExceptionInit = { operationName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({recursionLimit})", () => {
  const exMsg =
    `An operation exceeded the maximum recursion depth of ${recursionLimit}.`;
  const data: RecursionExceptionInit = { recursionLimit };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({consecutiveRepeatingValues})", () => {
  const exMsg =
    `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values.`;
  const data: RecursionExceptionInit = { consecutiveRepeatingValues: true };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({operationName, recursionLimit})", () => {
  const exMsg =
    `The operation "${operationName}" exceeded the maximum recursion depth of ${recursionLimit}.`;
  const data: RecursionExceptionInit = { operationName, recursionLimit };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({operationName, consecutiveRepeatingValues})", () => {
  const exMsg =
    `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values.`;
  const data: RecursionExceptionInit = {
    operationName,
    consecutiveRepeatingValues: true,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({recursionLimit, consecutiveRepeatingValues})", () => {
  const exMsg =
    `An operation exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${
      recursionLimit > 1 ? "s" : ""
    }.`;
  const data: RecursionExceptionInit = {
    recursionLimit,
    consecutiveRepeatingValues: true,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException({operationName, recursionLimit, consecutiveRepeatingValues})", () => {
  const exMsg =
    `The operation "${operationName}" exceeded the maximum recursion depth by handling consecutive repeating recursion values ${recursionLimit} time${
      recursionLimit > 1 ? "s" : ""
    }.`;
  const data: RecursionExceptionInit = {
    operationName,
    recursionLimit,
    consecutiveRepeatingValues: true,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(data);
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

Deno.test("RecursionException(message)", () => {
  const exMsg = "An operation exceeded is recursively running too long.";
  const ex = new RecursionException(exMsg);
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

Deno.test("RecursionException(message, {operationName, recursionLimit, consecutiveRepeatingValues})", () => {
  const exMsg = "An operation exceeded configured recursion limits.";
  const data: RecursionExceptionInit = {
    operationName,
    recursionLimit,
    consecutiveRepeatingValues: true,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new RecursionException(exMsg, data);
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
