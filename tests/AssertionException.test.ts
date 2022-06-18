/**
 * Tests the features of the {@link AssertionException}.
 *
 * AssertionException is currently just an `Exception` with a different `code`
 * property, so that's all we are testing right now.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import { AssertionException } from "../mod.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestSuite, TestCase, Test } = Testing.decorators;
const exCode = 2;
const exName = "AssertionException";
const messages = [
  "The thing is not defined.",
];
const messageCases = messages.map((m) => [m]);
//  #endregion

//  #region test-fixture-import
import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_internals/mod.ts";
import { TrackFailedCase } from "./_utils/mod.ts";
//  #endregion

//  #region tests
@TestSuite("AssertionException")
class AssertionExceptionTest {
  @Test("(message)")
  @TestCase(...messageCases)
  @TrackFailedCase
  public testWithMessage([exMsg]: [string]) {
    const ex = new AssertionException(exMsg);
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const exHelpUrl = `${P11_EXC_KB}/0x${exCode.toString(16)}?${esd.message}=${
      encodeURIComponent(exMsg)
    }`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.cause, undefined);
    assertEquals(ex.data, undefined);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
  }
}
//  #endregion

Testing(AssertionExceptionTest);
