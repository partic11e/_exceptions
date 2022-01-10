/**
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 */
import { assertEquals } from "../dev_deps.ts";
import {
  ExceptionSerializationData as esd,
  I11N_EXC_KB,
} from "../src/_constants.ts";

import { ValueException, ValueExceptionInit } from "../mod.ts";

//#region Test Data

const exCode = 5;
const exName = "ValueException";
const valueName = "exampleValue";
const valueConstraints = ["number", "between 1 and 20"];

//#endregion
//#region Test constructors

Deno.test("ValueException()", () => {
  const exMsg = "A symbol has the correct type, but an invalid value.";
  const ex = new ValueException();
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ValueException({valueName})", () => {
  const exMsg =
    `The symbol "${valueName}" has the correct type, but an invalid value.`;
  const data: ValueExceptionInit = { valueName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ValueException(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ValueException({valueConstraints})", () => {
  const exMsg =
    `A symbol has the correct type, but an invalid value. It has the following constraints: ${
      valueConstraints.join(", ")
    }.`;
  const data: ValueExceptionInit = { valueConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ValueException(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ValueException({valueName, valueConstraints})", () => {
  const exMsg =
    `The symbol "${valueName}" has the correct type, but an invalid value. It has the following constraints: ${
      valueConstraints.join(", ")
    }.`;
  const data: ValueExceptionInit = { valueName, valueConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ValueException(data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ValueException(message)", () => {
  const exMsg = "A correct type was provided, but with an incorrect value";
  const ex = new ValueException(exMsg);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

Deno.test("ValueException(message, {valueName, valueConstraints})", () => {
  const exMsg = "A value is invalid.";

  const data: ValueExceptionInit = { valueName, valueConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new ValueException(exMsg, data);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }&${esd.data}=${dataEncoded}`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.data, data);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

//#endregion
