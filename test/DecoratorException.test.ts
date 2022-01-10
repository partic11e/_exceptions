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

import { DecoratorException, DecoratorExceptionInit } from "../mod.ts";
import { DecoratorType } from "../deps.ts";
import { Decorator } from "../dev_deps.ts";

//#region Test Data

const exCode = 10;
const exName = "DecoratorException";
const decoratorName = "ExampleDecorator";
const decoratorTypes: DecoratorType[] = [
  Decorator.Class,
  Decorator.Method,
  Decorator.Accessor,
  Decorator.Property,
  Decorator.Parameter,
];

//#endregion
//#region Test constructors

Deno.test("DecoratorException()", () => {
  const exMsg = "A decorator failed to apply.";
  const ex = new DecoratorException();
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

Deno.test("DecoratorException({decoratorName})", () => {
  const exMsg = `The decorator "${decoratorName}" failed to apply.`;
  const data: DecoratorExceptionInit = { decoratorName };
  const dataEncoded = encodeURIComponent(JSON.stringify(data));

  const ex = new DecoratorException(data);
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

Deno.test("DecoratorException({decoratorType})", () => {
  decoratorTypes.forEach((decoratorType) => {
    const exMsg = `${
      "aeiou".includes(decoratorType.charAt(0)) ? "An" : "A"
    } ${decoratorType} decorator failed to apply.`;

    const data: DecoratorExceptionInit = { decoratorType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new DecoratorException(data);
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

Deno.test("DecoratorException({decoratorName, decoratorType})", () => {
  decoratorTypes.forEach((decoratorType) => {
    const exMsg =
      `The ${decoratorType} decorator "${decoratorName}" failed to apply.`;

    const data: DecoratorExceptionInit = { decoratorName, decoratorType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new DecoratorException(data);
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

Deno.test("DecoratorException(message)", () => {
  const exMsg = "A decorator did not apply correctly.";
  const ex = new DecoratorException(exMsg);
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

Deno.test("DecoratorException(message, {decoratorName, decoratorType})", () => {
  const exMsg = "A decorator did not apply correctly.";

  decoratorTypes.forEach((decoratorType) => {
    const data: DecoratorExceptionInit = { decoratorName, decoratorType };
    const dataEncoded = encodeURIComponent(JSON.stringify(data));

    const ex = new DecoratorException(exMsg, data);
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
