/**
 * Development dependencies for the partic11e library exception module.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region export-types
//  #endregion

//  #region export-constants
export {
  CodeBase,
  Decorator,
  Formatter,
  Operation,
  Parser,
  Resource,
} from "https://denopkg.com/partic11e/common@dev/mod.ts";
//  #endregion

//  #region export-features
export {
  assert,
  assertEquals,
  assertExists,
  assertThrows,
} from "https://deno.land/std@0.120.0/testing/asserts.ts";

export { Testing } from "https://denopkg.com/partic11e/test-suite@dev/mod.ts";
//  #endregion
