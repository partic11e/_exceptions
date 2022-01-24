/**
 * Tests the features of the {@link MethodException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals } from "../dev_deps.ts";

import { MethodException, MethodExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 8;
const exName = "MethodException";
const valueName = "middleware";
const methodName = "testMiddleware";
const validMethods = ["cors", "authn", "autho"];

Deno.test("MethodException()", () => {
  const exMsg = "Unable to locate a method on an object.";
  const ex = new MethodException();
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

Deno.test("MethodException({valueName})", () => {
  const exMsg = `Unable to locate a method on the object "${valueName}".`;
  const data: MethodExceptionInit = { valueName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({methodName})", () => {
  const exMsg = `Unable to locate the method "${methodName}" on an object.`;
  const data: MethodExceptionInit = { methodName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({validMethods})", () => {
  const exMsg =
    `Unable to locate a method on an object. Valid methods include: "${
      validMethods.join(`", "`)
    }".`;
  const data: MethodExceptionInit = { validMethods };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({valueName, methodName})", () => {
  const exMsg =
    `Unable to locate the method "${methodName}" on the object "${valueName}".`;
  const data: MethodExceptionInit = { valueName, methodName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({valueName, validMethods})", () => {
  const exMsg =
    `Unable to locate a method on the object "${valueName}". Valid methods include: "${
      validMethods.join(`", "`)
    }".`;
  const data: MethodExceptionInit = { valueName, validMethods };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({methodName, validMethods})", () => {
  const exMsg =
    `Unable to locate the method "${methodName}" on an object. Valid methods include: "${
      validMethods.join(`", "`)
    }".`;
  const data: MethodExceptionInit = { methodName, validMethods };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException({valueName, methodName, validMethods})", () => {
  const exMsg =
    `Unable to locate the method "${methodName}" on the object "${valueName}". Valid methods include: "${
      validMethods.join(`", "`)
    }".`;
  const data: MethodExceptionInit = { valueName, methodName, validMethods };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(data);
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

Deno.test("MethodException(message)", () => {
  const exMsg = "The provided method is not found on the object.";
  const ex = new MethodException(exMsg);
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

Deno.test("MethodException(message, {valueName, methodName, validMethods})", () => {
  const exMsg = "The provided key is not found on the object.";
  const data: MethodExceptionInit = { valueName, methodName, validMethods };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new MethodException(exMsg, data);
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
