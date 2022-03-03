/**
 * Tests the features of the {@link Exception}.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { assertEquals, assertExists, Testing } from "../dev_deps.ts";

import { Exception } from "../mod.ts";

import {
  ExceptionSerializationData as esd,
  P11_EXC_KB,
} from "../src/_constants.ts";

const { TestSuite, Test, TestCase } = Testing.decorators;

const exCode = 0;
const exName = "Exception";

@TestSuite("Exception")
class ExceptionTest {
  @Test("(message)")
  @TestCase(["An error has occurred."])
  public testWithMessage([exMsg]: [string]) {
    const ex = new Exception(exMsg);
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

  @Test("(message, {cause})")
  public testWithMessageCause() {
    const errName = "Error";
    const errMsg = "Failed to execute.";
    const cause = new Error(errMsg);
    const causeJson = {
      name: errName,
      message: errMsg,
      url: "",
    };
    const causeJsonEncoded = encodeURIComponent(JSON.stringify(causeJson));
    const exMsg = "An error has occurred.";
    const ex = new Exception(exMsg, { cause });
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const baseHelpUrl = `${P11_EXC_KB}/0x${
      exCode.toString(16)
    }?${esd.message}=${encodeURIComponent(exMsg)}`;
    const exHelpUrl = `${baseHelpUrl}&${esd.cause}=${causeJsonEncoded}`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.data, undefined);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
    assertEquals(ex.cause, cause);
    assertEquals(ex.cause?.name, errName);
    assertEquals(ex.cause?.message, errMsg);
  }

  @Test("(message, init)")
  public testWithMessageInit() {
    const errName = "Error";
    const errMsg = "Failed to execute.";
    const cause = new Error(errMsg);
    const causeJson = {
      name: errName,
      message: errMsg,
      url: "",
    };
    const causeJsonEncoded = encodeURIComponent(JSON.stringify(causeJson));
    const otherData = {
      key1: "value1",
      key2: false,
      key3: 25,
    };
    const otherDataEncoded = encodeURIComponent(JSON.stringify(otherData));
    const exMsg = "An error has occurred.";
    const ex = new Exception(exMsg, { cause, ...otherData });
    const ex2String = `${exName} [0x${exCode.toString(16)}]: ${exMsg}`;
    const baseHelpUrl = `${P11_EXC_KB}/0x${
      exCode.toString(16)
    }?${esd.message}=${encodeURIComponent(exMsg)}`;
    const exHelpUrl =
      `${baseHelpUrl}&${esd.data}=${otherDataEncoded}&${esd.cause}=${causeJsonEncoded}`;

    assertEquals(ex.name, exName);
    assertEquals(ex.code, exCode);
    assertEquals(ex.data, otherData);
    assertEquals(ex.message, exMsg);
    assertEquals(ex.toString(), ex2String);
    assertEquals(ex.helpUrl, exHelpUrl);
    assertEquals(ex.cause, cause);
    assertEquals(ex.cause?.name, errName);
    assertEquals(ex.cause?.message, errMsg);
  }

  @Test("deep help URL parsing")
  public testDeepUrl() {
    const operation = "Execute Statement";
    const workflow = "Clean Database";
    const task = "Application Cleanup";
    const ranAt = new Date(Date.now()).getTime();
    const completedAt = new Date(Date.now() + 5500).getTime();
    const causeName1 = "Error";
    const causeMsg1 = "Not permitted.";
    const cause1 = new Error(causeMsg1);
    const causeName2 = "Exception";
    const causeMsg2 = "Operation not allowed";
    const cause2Data = { operation };
    const cause2 = new Exception(causeMsg2, { cause: cause1, ...cause2Data });
    const causeName3 = "Exception";
    const causeMsg3 = "Failed to run workflow";
    const cause3Data = { workflow };
    const cause3 = new Exception(causeMsg3, { cause: cause2, ...cause3Data });
    const causeMsg4 = "Scheduled task failed";
    const cause4Data = { task, ranAt, completedAt };
    const cause4 = new Exception(causeMsg4, { cause: cause3, ...cause4Data });
    const url4 = new URL(cause4.helpUrl);
    const url4Params = url4.searchParams;
    const urlMsg4 = url4Params.get(esd.message);
    const urlData4 = url4Params.get(esd.data);
    const urlInner4 = url4Params.get(esd.cause);

    assertExists(urlMsg4);
    assertExists(urlData4);
    assertExists(urlInner4);
    assertEquals(urlMsg4, causeMsg4);
    assertEquals(JSON.parse(urlData4!), cause4Data);
    assertEquals(JSON.parse(urlInner4!), {
      [esd.name]: causeName3,
      [esd.message]: causeMsg3,
      [esd.helpUrl]: cause3.helpUrl,
    });

    const url3 = new URL(cause3.helpUrl);
    const url3Params = url3.searchParams;
    const urlMsg3 = url3Params.get(esd.message);
    const urlData3 = url3Params.get(esd.data);
    const urlInner3 = url3Params.get(esd.cause);

    assertExists(urlMsg3);
    assertExists(urlData3);
    assertExists(urlInner3);
    assertEquals(urlMsg3, causeMsg3);
    assertEquals(JSON.parse(urlData3!), cause3Data);
    assertEquals(JSON.parse(urlInner3!), {
      [esd.name]: causeName2,
      [esd.message]: causeMsg2,
      [esd.helpUrl]: cause2.helpUrl,
    });

    const url2 = new URL(cause2.helpUrl);
    const url2Params = url2.searchParams;
    const urlMsg2 = url2Params.get(esd.message);
    const urlData2 = url2Params.get(esd.data);
    const urlInner2 = url2Params.get(esd.cause);

    assertExists(urlMsg2);
    assertExists(urlData2);
    assertExists(urlInner2);
    assertEquals(urlMsg2, causeMsg2);
    assertEquals(JSON.parse(urlData2!), cause2Data);
    assertEquals(JSON.parse(urlInner2!), {
      [esd.name]: causeName1,
      [esd.message]: causeMsg1,
      [esd.helpUrl]: "",
    });
  }
}

Testing(ExceptionTest);
