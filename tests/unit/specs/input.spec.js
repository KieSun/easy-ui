import { expect } from "chai"
import Input from 'package/input/input'
import { destroyVM, createTest } from '../util'

describe("Input", () => {
  it('input exist.', () => {
    expect(Input).to.exist
  })
});

describe('Input props', () => {
  let vm
  beforeEach(() => {
    vm = createTest(Input, {
      value: 'yck'
    }, true)
  })
  afterEach(() => {
    destroyVM(vm);
  });
  it('input value.', () => {
    let input = vm.$el.querySelector('input')
    expect(input.value).eq('yck')
  })
});
