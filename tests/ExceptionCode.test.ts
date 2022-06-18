/**
 * This test tests that the Exceptions and Warnings in the core libraries have
 * a unique `code` property. This is important as the `code` property is used
 * in the Ex^2 (Exception Explain) application.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import {
  AbortedException,
  ArgumentException,
  ArgumentIndexException,
  ArgumentKeyException,
  AssertionException,
  DecoratorException,
  Exception,
  ExternalException,
  FormatException,
  IndexException,
  KeyException,
  MethodException,
  NotImplementedException,
  NotSupportedException,
  ParseException,
  RecursionException,
  TimeoutException,
  ValueException,
} from "../mod.ts";
import "./_utils/mod.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestSuite, Test } = Testing.decorators;
const exceptions = [
  AbortedException,
  ArgumentException,
  ArgumentIndexException,
  ArgumentKeyException,
  AssertionException,
  DecoratorException,
  Exception,
  ExternalException,
  FormatException,
  IndexException,
  KeyException,
  MethodException,
  NotImplementedException,
  NotSupportedException,
  ParseException,
  RecursionException,
  TimeoutException,
  ValueException,
];
const codes = exceptions.map((exCtor) => (new exCtor("Test")).code);
//  #endregion

//  #region test-fixture-import
//  #endregion

//  #region tests
@TestSuite("Exception code")
class ExceptionCodesTest {
  @Test("unique codes")
  public testunique() {
    assertEquals(exceptions.length, codes.length);

    for (let i = 0; i < exceptions.length; i++) {
      const code = codes[i];
      const firstIndex = codes.indexOf(code);
      const lastIndex = codes.lastIndexOf(code);

      assertEquals(
        firstIndex,
        lastIndex,
        `Exception code 0x${code.toString(16)} is used with ${
          exceptions[firstIndex].name
        } and ${exceptions[lastIndex].name}.`,
      );
    }
  }
}
//  #endregion

Testing(ExceptionCodesTest);
