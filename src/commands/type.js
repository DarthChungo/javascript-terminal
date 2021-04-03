import * as OutputFactory from 'emulator-output/output-factory';

export const optDef = {};

export default (state, options) => {
  const { argv } = parseOptions(options, optDef);

  return {
    output: OutputFactory.makeTypingOutput(argv.join(' '))
  };
};
