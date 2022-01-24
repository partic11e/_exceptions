/**
 * Tests the features of the {@link TimeoutException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals } from "../dev_deps.ts";

import { TimeoutException, TimeoutExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 3;
const exName = "TimeoutException";
const operationName = "QueryStuff";
const operationTimeouts = [30, 60, 5, 10, 65, 1] as const;

Deno.test("TimeoutException()", () => {
  const exMsg = "An operation timed out.";
  const ex = new TimeoutException();
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

Deno.test("TimeoutException({operationName})", () => {
  const exMsg = `The operation "${operationName}" timed out.`;
  const data: TimeoutExceptionInit = { operationName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new TimeoutException(data);
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

Deno.test("TimeoutException({operationTimeout})", () => {
  operationTimeouts.forEach((operationTimeout) => {
    const exMsg = `An operation timed out after ${operationTimeout} second${
      operationTimeout === 1 ? "" : "s"
    }.`;
    const data: TimeoutExceptionInit = { operationTimeout };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new TimeoutException(data);
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

Deno.test("TimeoutException({operationName, operationTimeout})", () => {
  operationTimeouts.forEach((operationTimeout) => {
    const exMsg =
      `The operation "${operationName}" timed out after ${operationTimeout} second${
        operationTimeout === 1 ? "" : "s"
      }.`;
    const data: TimeoutExceptionInit = { operationName, operationTimeout };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new TimeoutException(data);
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

Deno.test("TimeoutException(message)", () => {
  const exMsg = "An operation exceeded configured timeout thresholds.";
  const ex = new TimeoutException(exMsg);
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

Deno.test("TimeoutException(message, {externalName, externalType})", () => {
  operationTimeouts.forEach((operationTimeout) => {
    const exMsg = "An operation exceeded configured timeout thresholds.";
    const data: TimeoutExceptionInit = { operationName, operationTimeout };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new TimeoutException(exMsg, data);
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
