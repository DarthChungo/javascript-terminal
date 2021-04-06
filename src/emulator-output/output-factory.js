import { Record } from "immutable";
import {
  HEADER_OUTPUT_TYPE,
  TEXT_OUTPUT_TYPE,
  TEXT_ERROR_OUTPUT_TYPE,
} from "emulator-output/output-type";
import { IMAGE_OUTPUT_TYPE, TYPING_OUTPUT_TYPE, LINK_OUTPUT_TYPE } from "./output-type";

/**
 * Output from a command or emulator used for display to the user
 * @type {OutputRecord}
 */
export const OutputRecord = Record({
  type: undefined,
  content: undefined,
});

/**
 * A terminal header containing metadata
 * @param  {string} cwd   the current working directory path
 * @return {OutputRecord} output record
 */
export const makeHeaderOutput = (cwd, command) => {
  return new OutputRecord({
    type: HEADER_OUTPUT_TYPE,
    content: { cwd, command },
  });
};

/**
 * Unstyled text output
 * @param  {string} content plain string output from a command or the emulator
 * @return {OutputRecord}   output record
 */
export const makeTextOutput = (content) => {
  return new OutputRecord({
    type: TEXT_OUTPUT_TYPE,
    content,
  });
};

/**
 * Error text output
 * @param  {object} err internal error object
 * @return {OutputRecord}   output record
 */
export const makeErrorOutput = (err) => {
  return new OutputRecord({
    type: TEXT_ERROR_OUTPUT_TYPE,
    content: `${err.type}`,
  });
};

export const makeImageOutput = (imageUrl) => {
  return new OutputRecord({
    type: IMAGE_OUTPUT_TYPE,
    content: imageUrl,
  });
};

export const makeTypingOutput = (content, typeSpeed = 20, deleteSpeed = 0) => {
  return new OutputRecord({
    type: TYPING_OUTPUT_TYPE,
    content: {
      content: [{
        content: content
      }],
      options: {
        typeSpeed: typeSpeed,
        deleteSpeed: deleteSpeed
      }
    },
  });
};

export const makeTypingOutputFormated = (array, typeSpeed = 20, deleteSpeed = 0) => {
  return new OutputRecord({
    type: TYPING_OUTPUT_TYPE,
    content: {
      content: array.map(el => {
        return {
          content: el
        }
      }),
      options: {
        typeSpeed: typeSpeed,
        deleteSpeed: deleteSpeed
      }
    }
  });
}

export const makeLinkOutput = (link) => {
  return new OutputRecord({
    type: LINK_OUTPUT_TYPE,
    content: link
  });
}
