/**
 * Tests the features of the {@link ArgumentKeyException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals } from "../dev_deps.ts";

import { ArgumentKeyException, ArgumentKeyExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 13;
const exName = "ArgumentKeyException";
const argumentName = "exampleArgument";
const key = "test";
const validKeys = ["hello", "world", "greet"];

Deno.test("ArgumentKeyException()", () => {
  const exMsg =
    "Unable to locate a property key on an object or record argument.";
  const ex = new ArgumentKeyException();
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

Deno.test("ArgumentKeyException({argumentName})", () => {
  const exMsg =
    `Unable to locate a property key on the object or record argument "${argumentName}".`;
  const data: ArgumentKeyExceptionInit = { argumentName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({key})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on an object or record argument.`;
  const data: ArgumentKeyExceptionInit = { key };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({validKeys})", () => {
  const exMsg =
    `Unable to locate a property key on an object or record argument. Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: ArgumentKeyExceptionInit = { validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({argumentName, key})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on the object or record argument "${argumentName}".`;
  const data: ArgumentKeyExceptionInit = { argumentName, key };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({argumentName, validKeys})", () => {
  const exMsg =
    `Unable to locate a property key on the object or record argument "${argumentName}". Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: ArgumentKeyExceptionInit = { argumentName, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({key, validKeys})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on an object or record argument. Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: ArgumentKeyExceptionInit = { key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException({argumentName, key, validKeys})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on the object or record argument "${argumentName}". Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: ArgumentKeyExceptionInit = { argumentName, key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(data);
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

Deno.test("ArgumentKeyException(message)", () => {
  const exMsg =
    "The provided key is not found on the object or record argument.";
  const ex = new ArgumentKeyException(exMsg);
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

Deno.test("ArgumentKeyException(message, {argumentName, key, validKeys})", () => {
  const exMsg =
    "The provided key is not found on the object or record argument.";
  const data: ArgumentKeyExceptionInit = { argumentName, key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentKeyException(exMsg, data);
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
