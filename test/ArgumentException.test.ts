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

import { ArgumentException, ArgumentExceptionInit } from "../mod.ts";

//#region Test Data

const exCode = 11;
const exName = "ArgumentException";
const argumentName = "exampleArgument";
const argumentConstraints = ["number", "between 1 and 20"];

//#endregion
//#region Test constructors

Deno.test("ArgumentException()", () => {
  const exMsg = "An argument has the correct type, but an invalid value.";
  const ex = new ArgumentException();
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

Deno.test("ArgumentException({argumentName})", () => {
  const exMsg =
    `The argument "${argumentName}" has the correct type, but an invalid value.`;
  const data: ArgumentExceptionInit = { argumentName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentException(data);
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

Deno.test("ArgumentException({argumentConstraints})", () => {
  const exMsg =
    `An argument has the correct type, but an invalid value. It has the following constraints: ${
      argumentConstraints.join(", ")
    }.`;
  const data: ArgumentExceptionInit = { argumentConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentException(data);
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

Deno.test("ArgumentException({argumentName, argumentConstraints})", () => {
  const exMsg =
    `The argument "${argumentName}" has the correct type, but an invalid value. It has the following constraints: ${
      argumentConstraints.join(", ")
    }.`;
  const data: ArgumentExceptionInit = { argumentName, argumentConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentException(data);
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

Deno.test("ArgumentException(message)", () => {
  const exMsg = "A correct type was provided, but with an incorrect value";
  const ex = new ArgumentException(exMsg);
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

Deno.test("ArgumentException(message, {argumentName, argumentConstraints})", () => {
  const exMsg = "An argument is invalid.";

  const data: ArgumentExceptionInit = { argumentName, argumentConstraints };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new ArgumentException(exMsg, data);
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
