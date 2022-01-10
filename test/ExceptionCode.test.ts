/**
 * This test tests that the Exceptions and Warnings in the core libraries have
 * a unique `code` property. This is important as the `code` property is used
 * in the Ex^2 (Exception Explain) application.
 */
import { assertEquals } from "../dev_deps.ts";
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

Deno.test("Exception codes unique", () => {
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
});
