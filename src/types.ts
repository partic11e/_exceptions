/**
 * Contains the shared types for exception module in the particle11 core
 * library.
 *
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import type { Exception } from "./Exception.ts";

/**
 * An interface describing the base `init` properties that all
 * {@link Exception} classes can utilize.
 */
export interface IExceptionInit {
  cause?: Error | Exception;
}

/**
 * A generic interface describing additional `init` properties available to a
 * specific derived {@link Exception} unified with the common properties
 * available to all {@link Exception} classes.
 */
export type TExceptionInit<
  T extends Record<string, unknown> = Record<string, unknown>,
> = IExceptionInit & T;
