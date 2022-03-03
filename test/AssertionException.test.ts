/**
 * Tests the features of the {@link AssertionException}.
 *
 * AssertionException is currently just an `Exception` with a different `code`
 * property, so that's all we are testing right now.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals, Testing } from "../dev_deps.ts";

import { AssertionException } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

import { TrackFailedCase } from "./_util.ts";

const { TestSuite, TestCase, Test } = Testing.decorators;

//  exception constants
const exCode = 2;
const exName = "AssertionException";

//  init data

const messages = [
  "The thing is not defined.",
];

//  test cases
const messageCases = messages.map((m) => [m]);

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

Testing(AssertionExceptionTest);
