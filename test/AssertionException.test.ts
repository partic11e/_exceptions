/**
 * AssertionException is currently just an `Exception` with a different `code`
 * property, so that's all we are testing right now.
 */
import { assertEquals } from "../dev_deps.ts";
import {
  ExceptionSerializationData as esd,
  I11N_EXC_KB,
} from "../src/_constants.ts";
import { AssertionException } from "../mod.ts";

//#region Test Data

const exCode = 2;
const exName = "AssertionException";

//#endregion
//#region Test constructors

Deno.test("AssertionException(message)", () => {
  const exMsg = "The thing is not defined.";
  const ex = new AssertionException(exMsg);
  const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
  const exHelpUrl = `${I11N_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
    encodeURIComponent(exMsg)
  }`;

  assertEquals(ex.name, exName);
  assertEquals(ex.code, exCode);
  assertEquals(ex.cause, undefined);
  assertEquals(ex.data, undefined);
  assertEquals(ex.message, exMsg);
  assertEquals(ex.toString(), ex2String);
  assertEquals(ex.helpUrl, exHelpUrl);
});

//#endregion
