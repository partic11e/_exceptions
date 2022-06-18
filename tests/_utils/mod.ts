/**
 * Testing utilities.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { Testing } from "../../dev_deps.ts";
//  #endregion

//  #region feature-import-local
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestFail } = Testing.decorators;
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * A test decorator to log test failures differently.
 */
export const TrackFailedCase = TestFail((_err, meta) => {
  const { suite, test, testCase } = meta;
  console.error(
    `\n❌\x1b[31m Failed in ${suite.displayName} - ${test.displayName}\n❗   Test method: ${suite.name}::${test.name}(${testCase.index})`,
  );
  return true;
});
//  #endregion

//  #region internal
Testing.setTestNamingFunction((runner, test) => {
  return `\x1b[36m${runner.displayName}\x1b[0m ${test.displayName}`;
});
//  #endregion
