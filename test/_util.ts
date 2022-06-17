/**
 * Testing utilities.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { Testing } from "../dev_deps.ts";

Testing.setTestNamingFunction((runner, test) => {
  return `\x1b[36m${runner.displayName}\x1b[0m ${test.displayName}`;
});

const { TestFail } = Testing.decorators;

export const TrackFailedCase = TestFail((_err, meta) => {
  const { suite, test, testCase } = meta;
  console.error(
    `\n❌\x1b[31m Failed in ${suite.displayName} - ${test.displayName}\n❗   Test method: ${suite.name}::${test.name}(${testCase.index})`,
  );
  return true;
});
