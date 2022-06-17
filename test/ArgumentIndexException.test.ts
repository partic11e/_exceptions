/**
 * Tests the features of the {@link ArgumentIndexException}.
 *
 * The majority of the functionality for Exception is tested in the Exception
 * tests. This test only test feature differences caused by the the differing
 * code, messaging, and `ExceptionInit` properties.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals, assertThrows, Testing } from "../dev_deps.ts";

import {
  ArgumentIndexException,
  ArgumentIndexExceptionInit,
  ValueException,
} from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

import {
  allCases,
  badLowerUpperBoundCases,
  exCode,
  exName,
  initCases,
  messageCases,
} from "./ArgumentIndexException.cases.ts";

import { TrackFailedCase } from "./_util.ts";

const { TestSuite, TestCase, Test } = Testing.decorators;

@TestSuite("ArgumentIndexException")
class ArgumentIndexExceptionTest {
  @Test("()")
  public testWithNoArgs() {
    const exMsg = "An index is outside the bounds of an array argument.";
    const ex = new ArgumentIndexException();
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
  public testWithInit([data, exMsg]: [ArgumentIndexExceptionInit, string]) {
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new ArgumentIndexException(data);
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
    const ex = new ArgumentIndexException(exMsg);
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
  public testAll([data, exMsg]: [ArgumentIndexExceptionInit, string]) {
    const dataEncoded = encodeURIComponent(JSON.stringify(data));
    const ex = new ArgumentIndexException(exMsg, data);
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
    [data, exMsg]: [ArgumentIndexExceptionInit, string],
  ) {
    assertThrows(
      () => new ArgumentIndexException(data),
      ValueException,
      exMsg,
    );
  }
}

Testing(ArgumentIndexExceptionTest);
