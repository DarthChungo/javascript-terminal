import chai from 'chai';

import { OutputRecord, makeHeaderOutput, makeTextOutput, makeErrorOutput, makeTypingOutputFormated } from 'emulator-output/output-factory';
import * as Types from 'emulator-output/output-type';

describe('output-factory', () => {
  describe('OutputRecord', () => {
    it('should create a record with type and content', () => {
      const newRecord = new OutputRecord({
        type: 'the type',
        content: ['the content']
      });

      chai.expect(newRecord.type).to.equal('the type');
      chai.expect(newRecord.content).to.be.deep.equal(['the content']);
    });

    it('should ignore keys not in the schema', () => {
      const newRecord = new OutputRecord({
        notInSchema: 'do not add me'
      });

      chai.expect(newRecord.notInSchema).to.equal(undefined);
    });
  });

  describe('makeHeaderOutput', () => {
    it('should create a record with the cwd', () => {
      const outputRecord = makeHeaderOutput('the cwd', 'the command');

      chai.expect(outputRecord.content).to.deep.equal({cwd: 'the cwd', command: 'the command'});
    });

    it('should create a record with header type', () => {
      const outputRecord = makeHeaderOutput('');

      chai.expect(outputRecord.type).to.equal(Types.HEADER_OUTPUT_TYPE);
    });
  });

  describe('makeTextOutput', () => {
    it('should create a record with content', () => {
      const textRecord = makeTextOutput('the content');

      chai.expect(textRecord.content).to.be.deep.equal('the content');
    });

    it('should create a record with text type', () => {
      const textRecord = makeTextOutput('');

      chai.expect(textRecord.type).to.equal(Types.TEXT_OUTPUT_TYPE);
    });
  });

  describe('makeTextOutput', () => {
    it('should combine source of error and type of error in output', () => {
      const errorRecord = makeErrorOutput({
        type: 'the type'
      });

      chai.expect(errorRecord.content).to.be.deep.equal('the type');
    });

    it('should create a record with error type', () => {
      const errorRecord = makeErrorOutput({
        type: 'the type'
      });

      chai.expect(errorRecord.type).to.equal(Types.TEXT_ERROR_OUTPUT_TYPE);
    });
  });

  describe('makeTypingOutputFormated', () => {
    it('should make typing output formated', () => {
      const record = makeTypingOutputFormated(["a", 1000, "b"]);

      chai.expect(record.content.content).to.eql([{
        content: "a"
      },{
        content: 1000
      },{
        content: "b"
      }])

      chai.expect(record.content.options).to.eql({
        typeSpeed: 20,
        deleteSpeed: 0
      })
    });
  });
});
