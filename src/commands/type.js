import * as OutputFactory from 'emulator-output/output-factory';
import parseOptions from 'parser/option-parser';

export const optDef = {};

export default (state, options) => {
  const { argv } = parseOptions(options, optDef);

  return {
    output: OutputFactory.makeTypingOutput(argv.join(' '))
  };
};
