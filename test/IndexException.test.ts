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

import { IndexException, IndexExceptionInit, ValueException } from "../mod.ts";

//#region Test Data

const exCode = 6;
const exName = "IndexException";
const valueName = "exampleValue";
const index = 2;
const lowerBound = 1;
const upperBound = 4;

//#endregion
//#region Test constructors

Deno.test("IndexException()", () => {
  const exMsg = "An index is outside the bounds of an array.";
  const ex = new IndexException();
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

Deno.test("IndexException({valueName})", () => {
  const exMsg = `An index is outside the bounds of the array "${valueName}".`;
  const data: IndexExceptionInit = { valueName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({index})", () => {
  const exMsg = `The index ${index} is outside the bounds of an array.`;
  const data: IndexExceptionInit = { index };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({lowerBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array. The index must be ${lowerBound} or greater.`;
  const data: IndexExceptionInit = { lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, index})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array "${valueName}".`;
  const data: IndexExceptionInit = { valueName, index };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, lowerBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`;
  const data: IndexExceptionInit = { valueName, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { valueName, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({index, lowerBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of an array. The index must be ${lowerBound} or greater.`;
  const data: IndexExceptionInit = { index, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({index, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of an array. The index must be 0 or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { index, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({lowerBound, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of an array. The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { lowerBound, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, index, lowerBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or greater.`;
  const data: IndexExceptionInit = { valueName, index, lowerBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, index, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array "${valueName}". The index must be 0 or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { valueName, index, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, lowerBound, upperBound})", () => {
  const exMsg =
    `An index is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { valueName, lowerBound, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException({valueName, index, lowerBound, upperBound})", () => {
  const exMsg =
    `The index ${index} is outside the bounds of the array "${valueName}". The index must be ${lowerBound} or ${upperBound}, or between them.`;
  const data: IndexExceptionInit = { valueName, index, lowerBound, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));
  const ex = new IndexException(data);
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

Deno.test("IndexException(message)", () => {
  const exMsg = "The provided index is outside the range of the array.";
  const ex = new IndexException(exMsg);
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

Deno.test("IndexException(message, {valueName, index, lowerBound, upperBound})", () => {
  const exMsg = "The provided index is outside the range of the array.";

  const data: IndexExceptionInit = { valueName, index, lowerBound, upperBound };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new IndexException(exMsg, data);
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

Deno.test("IndexException({lowerBound, upperBound}) - upperBound <= lowerBound", () => {
  assertThrows(
    () => new IndexException({ lowerBound: 5, upperBound: 4 }),
    ValueException,
    `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
  );
  assertThrows(
    () => new IndexException({ lowerBound: 5, upperBound: 5 }),
    ValueException,
    `The symbol "init.upperBound" has the correct type, but an invalid value. It has the following constraints: positive integer, greater than init.lowerBound.`,
  );
});

//#endregion
