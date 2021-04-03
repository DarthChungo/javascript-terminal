import chai from "chai";
import chaiImmutable from "chai-immutable";
chai.use(chaiImmutable);

import EmulatorState from "emulator-state/EmulatorState";
import img from "commands/img";
import { IMAGE_OUTPUT_TYPE } from "emulator-output/output-type";

describe("echo", () => {
  const state = EmulatorState.create({});

  it("should create the image output", () => {
    const { output } = img(state, ["https://someurl.com/someimage"]);

    chai.expect(output.content).to.equal("https://someurl.com/someimage");
    chai.expect(output.type).to.equal(IMAGE_OUTPUT_TYPE);
  });
});
