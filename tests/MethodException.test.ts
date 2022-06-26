/**
 * Tests the features of the {@link MethodException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import { MethodException } from "../mod.ts";
import { TrackFailedCase } from "./_utils/mod.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
import type { MethodExceptionInit } from "../mod.ts";
//  #endregion

//  #region constants-local
const { TestSuite, TestCase, Test } = Testing.decorators;
//  #endregion

//  #region test-fixture-import
import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_internals/mod.ts";
import {
  allCases,
  exCode,
  exName,
  initCases,
  messageCases,
} from "./_fixtures/MethodException.cases.ts";
//  #endregion

//  #region tests
@TestSuite("MethodException")
class MethodExceptionTest {
  @Test("()")
  public testWithNoArgs() {
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
  }

  @Test("(init)")
  @TestCase(...initCases)
  @TrackFailedCase
  public testWithInit([data, exMsg]: [MethodExceptionInit, string]) {
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
  }

  @Test("(message)")
  @TestCase(...messageCases)
  @TrackFailedCase
  public testWithMessage([exMsg]: [string]) {
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
  }

  @Test("(message, init)")
  @TestCase(...allCases)
  public testAll([data, exMsg]: [MethodExceptionInit, string]) {
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
  }
}
//  #endregion

Testing(MethodExceptionTest);
