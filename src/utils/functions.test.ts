import { handleSelection, isSelected } from "./functions";

const selected = new Map([[0, false], [3, true], [13333, true]]);

describe('isSelected', () => {
  it('should return true for boxerId in selected Map', () => {
    expect(isSelected(selected, 3)).toEqual(true);
  })

  it('should return false for boxerId not in selected Map', () => {
    expect(isSelected(selected, 3452)).toEqual(false);
  })
})

describe('handleSelection', () => {
  it('should set record for selected boxerId to false', () => {
    expect(handleSelection(selected, 3).get(3)).toEqual(false);
  })

  it('should set record for not selected boxerId to true', () => {
    expect(handleSelection(selected, 0).get(0)).toEqual(true);
  })

  it('should return map with newly selected boxerId', () => {
    expect(handleSelection(selected, 3452).get(3452)).toEqual(true);
  })
})