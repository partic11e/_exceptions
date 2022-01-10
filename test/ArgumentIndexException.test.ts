/**
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 */
import { assertEquals, assertThrows } from "../dev_deps.ts";
import {
  ExceptionSerializationData as esd,
  I11N_EXC_KB,
} from "../src/_constants.ts";

import {
  ArgumentIndexException,
  ArgumentIndexExceptionInit,
  ValueException,
} from "../mod.ts";

//#region Test Data

const exCode = 12;
const exName = "ArgumentIndexException";
const argumentName = "exampleArgument";
const index = 2;
const lowerBound = 1;
const upperBound = 4;

//#endregion
//#region Test constructors

Deno.test("ArgumentIndexException()", () => {
  const exMsg = "An index is outside the bounds of an array argument.";
  const ex = new ArgumentIndexException();
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

Deno.test("ArgumentIndexException({argumentName})", () => {
  const exMsg =
    `An index is outside the bounds of the array argument "${argumentName}".`;
  const data: ArgumentIndexExceptionInit = { argumentName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({index})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of an array argument.`;
  const data: ArgumentIndexExceptionInit = { index };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({lowerBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`;
  const data: ArgumentIndexExceptionInit = { lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = { upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({valueName, index})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array argument "${argumentName}".`;
  const data: ArgumentIndexExceptionInit = { argumentName, index };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({valueName, lowerBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`;
  const data: ArgumentIndexExceptionInit = { argumentName, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({argumentName, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = { argumentName, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({index, lowerBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of an array argument. The index must be ${lowerBound} or greater.`;
  const data: ArgumentIndexExceptionInit = { index, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({index, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of an array argument. The index must be 0 or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = { index, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({lowerBound, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array argument. The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = { lowerBound, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({argumentName, index, lowerBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or greater.`;
  const data: ArgumentIndexExceptionInit = { argumentName, index, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({argumentName, index, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be 0 or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = { argumentName, index, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({argumentName, lowerBound, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = {
    argumentName,
    lowerBound,
    upperBound,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException({argumentName, index, lowerBound, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array argument "${argumentName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: ArgumentIndexExceptionInit = {
    argumentName,
    index,
    lowerBound,
    upperBound,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new ArgumentIndexException(data);
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

Deno.test("ArgumentIndexException(message)", () => {
  const exMsg =
    "The provided index is outside the range of the array argument.";
  const ex = new ArgumentIndexException(exMsg);
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

Deno.test("ArgumentIndexException(message, {argumentName, index, lowerBound, upperBound})", () => {
  const exMsg =
    "The provided index is outside the range of the array argument.";

  const data: ArgumentIndexExceptionInit = {
    argumentName,
    index,
    lowerBound,
    upperBound,
  };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new ArgumentIndexException(exMsg, data);
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

Deno.test("ArgumentIndexException({lowerBound, upperBound}) - upperBound <= lowerBound", () => {
  assertThrows(
    () => new ArgumentIndexException({ lowerBound: 5, upperBound: 4 }),
    ValueException,
    `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
  );
  assertThrows(
    () => new ArgumentIndexException({ lowerBound: 5, upperBound: 5 }),
    ValueException,
    `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
  );
});

//#endregion
