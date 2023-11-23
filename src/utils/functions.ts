export const isSelected = (selected: Map<number, boolean>, boxerId: number) => !!selected.get(boxerId);

export const handleSelection = (prevSelected: Map<number, boolean>, boxerId: number) => {
  const newSelected = new Map(prevSelected);
  if (!newSelected.delete(boxerId)) {
    newSelected.set(boxerId, !isSelected(prevSelected, boxerId));
  }

  return newSelected;
}