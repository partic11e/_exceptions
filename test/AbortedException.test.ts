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

import { AbortedException, AbortedExceptionInit } from "../mod.ts";
import type { OperationType } from "../deps.ts";
import { Operation } from "../dev_deps.ts";

//#region Test Data

const exCode = 9;
const exName = "AbortedException";
const operationName = "exampleOperation";
const operationTypes: OperationType[] = [
  Operation.Action,
  Operation.Build,
  Operation.Operation,
  Operation.Process,
  Operation.Thread,
  Operation.Workflow,
];

//#endregion
//#region Test constructors

Deno.test("AbortedException()", () => {
  const exMsg = "An operation was aborted prematurely.";
  const ex = new AbortedException();
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

Deno.test("AbortedException({operationName})", () => {
  const exMsg = `The operation "${operationName}" was aborted prematurely.`;
  const data: AbortedExceptionInit = { operationName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new AbortedException(data);
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

Deno.test("AbortedException({operationType})", () => {
  operationTypes.forEach((operationType) => {
    const exMsg = `A${
      "aeiou".includes(operationType.charAt(0)) ? "n" : ""
    } ${operationType} was aborted prematurely.`;

    const data: AbortedExceptionInit = { operationType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new AbortedException(data);
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
});

Deno.test("AbortedException({operationName, operationType})", () => {
  operationTypes.forEach((operationType) => {
    const exMsg =
      `The ${operationType} "${operationName}" was aborted prematurely.`;

    const data: AbortedExceptionInit = { operationName, operationType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new AbortedException(data);
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
});

Deno.test("AbortedException(message)", () => {
  const exMsg = "An operation was prematurely aborted.";
  const ex = new AbortedException(exMsg);
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

Deno.test("AbortedException(message, {operationName, operationType})", () => {
  const exMsg = "An operation was prematurely aborted.";

  operationTypes.forEach((operationType) => {
    const data: AbortedExceptionInit = { operationName, operationType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new AbortedException(exMsg, data);
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
});

//#endregion
