import { handleSelection, isSelected } from "./functions";

const selected = new Map([[0, true], [3, true], [13333, true]]);

describe('isSelected', () => {
  it('should return true for boxerId in selected Map', () => {
    expect(isSelected(selected, 3)).toEqual(true);
  })

  it('should return false for boxerId not in selected Map', () => {
    expect(isSelected(selected, 3452)).toEqual(false);
  })
})

describe('handleSelection', () => {
  it('should remove record already present in Map', () => {
    const result = handleSelection(selected, 3);
    expect(result.has(3)).toEqual(false);
    expect(result.size).toEqual(2);
  })

  it('should add record not present in Map', () => {
    const result = handleSelection(selected, 3452);
    expect(result.get(3452)).toEqual(true);
    expect(result.size).toEqual(4);
  })
})