import parseOptions from "parser/option-parser";
import * as OutputFactory from "emulator-output/output-factory";
import { makeError } from "../emulator/emulator-error";
import {
  makeErrorOutput,
  makeImageOutput,
} from "../emulator-output/output-factory";

export const optDef = {};

export default (state, commandOptions) => {
  const { argv } = parseOptions(commandOptions, optDef);

  if (argv.length === 0) {
    const error = makeError("INVALID_ARGUMENTS", "Image URL not provided");

    return {
      output: makeErrorOutput(error),
    };
  } else if (argv.length > 1) {
    const error = makeError(
      "INVALID_ARGUMENTS",
      "Too many arguments, please use image <imageUrl>"
    );

    return {
      output: makeErrorOutput(error),
    };
  }

  return {
    output: makeImageOutput(argv[0]),
  };
};
