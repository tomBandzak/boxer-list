import { boxersList } from '../boxers';
import BoxerDetail from './BoxerDetail';
import React, { useCallback, useState } from 'react';
import { handleSelection, isSelected } from "../utils";

const BoxerList = () => {
  const [selected, setSelected] = useState<Map<number, boolean>>(new Map());

  const handleBoxerClick = useCallback((boxerId: number) => {
    setSelected(prevSelected => {
      return handleSelection(prevSelected, boxerId)
    });
  },[]);

  return <>
    {boxersList.map((boxer, index) => <BoxerDetail key={index} index={index} boxer={boxer} selected={isSelected(selected, index)} selectionHandler={handleBoxerClick} />)}
  </>
}

export default BoxerList;