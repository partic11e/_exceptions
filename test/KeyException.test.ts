/**
 * Tests the features of the {@link KeyException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals } from "../dev_deps.ts";

import { KeyException, KeyExceptionInit } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const exCode = 7;
const exName = "KeyException";
const valueName = "exampleValue";
const key = "test";
const validKeys = ["hello", "world", "greet"];

Deno.test("KeyException()", () => {
  const exMsg = "Unable to locate a property key on an object or record.";
  const ex = new KeyException();
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

Deno.test("KeyException({valueName})", () => {
  const exMsg =
    `Unable to locate a property key on the object or record "${valueName}".`;
  const data: KeyExceptionInit = { valueName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({key})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on an object or record.`;
  const data: KeyExceptionInit = { key };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({validKeys})", () => {
  const exMsg =
    `Unable to locate a property key on an object or record. Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: KeyExceptionInit = { validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({valueName, key})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on the object or record "${valueName}".`;
  const data: KeyExceptionInit = { valueName, key };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({valueName, validKeys})", () => {
  const exMsg =
    `Unable to locate a property key on the object or record "${valueName}". Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: KeyExceptionInit = { valueName, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({key, validKeys})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on an object or record. Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: KeyExceptionInit = { key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException({valueName, key, validKeys})", () => {
  const exMsg =
    `Unable to locate the property key "${key}" on the object or record "${valueName}". Valid property keys include: "${
      validKeys.join(`", "`)
    }".`;
  const data: KeyExceptionInit = { valueName, key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(data);
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

Deno.test("KeyException(message)", () => {
  const exMsg = "The provided key is not found on the object or record.";
  const ex = new KeyException(exMsg);
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

Deno.test("KeyException(message, {valueName, key, validKeys})", () => {
  const exMsg = "The provided key is not found on the object or record.";
  const data: KeyExceptionInit = { valueName, key, validKeys };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new KeyException(exMsg, data);
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
