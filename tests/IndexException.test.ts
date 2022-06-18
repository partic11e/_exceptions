/**
 * Tests the features of the {@link IndexException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, assertThrows, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import { IndexException, ValueException } from "../mod.ts";
import { TrackFailedCase } from "./_utils/mod.ts";
//  #endregion

//  #region type-import-remote
import type { IndexExceptionInit } from "../mod.ts";
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestSuite, Test, TestCase } = Testing.decorators;
//  #endregion

//  #region test-fixture-import
import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_internals/mod.ts";
import {
  allCases,
  badLowerUpperBoundCases,
  exCode,
  exName,
  initCases,
  messageCases,
} from "./_fixtures/IndexException.cases.ts";
//  #endregion

//  #region tests
@TestSuite("IndexException")
class IndexExceptionTest {
  @Test("()")
  public testWithNoArgs() {
    const exMsg = "An index is outside the bounds of an array.";
    const ex = new IndexException();
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
  public testWithInit([data, exMsg]: [IndexExceptionInit, string]) {
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new IndexException(data);
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
    const ex = new IndexException(exMsg);
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
  @TrackFailedCase
  public testAll([data, exMsg]: [IndexExceptionInit, string]) {
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new IndexException(exMsg, data);
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

  @Test("({lowerBound, upperBound}): upperBound <= lowerBound")
  @TestCase(...badLowerUpperBoundCases)
  @TrackFailedCase
  public testWhenUpperBoundLteLowerBound(
    [data, exMsg]: [IndexExceptionInit, string],
  ) {
    assertThrows(
      () => new IndexException(data),
      ValueException,
      exMsg,
    );
  }
}
//  #endregion

Testing(IndexExceptionTest);
