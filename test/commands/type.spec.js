import chai from "chai";
import chaiImmutable from "chai-immutable";
chai.use(chaiImmutable);

import EmulatorState from "emulator-state/EmulatorState";
import type from "commands/type";
import { TYPING_OUTPUT_TYPE } from "emulator-output/output-type";

describe("type", () => {
  const state = EmulatorState.create({});

  it("should create the type tag", () => {
    const { output } = type(state, ["Hello", "world"]);

    chai.expect(output.content).to.equal("Hello world");
    chai.expect(output.type).to.equal(TYPING_OUTPUT_TYPE);
  });
});
