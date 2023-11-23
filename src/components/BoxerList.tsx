import { boxersList } from '../boxers';
import BoxerDetail from './BoxerDetail';
import React, { useCallback, useState } from 'react';
import { handleSelection, isSelected } from "../utils";
import { BoxerListWrap, NamesHeader } from "../styled";

const BoxerList = () => {
  const [selected, setSelected] = useState<Map<number, boolean>>(new Map());

  const handleBoxerClick = useCallback((boxerId: number) => {
    setSelected(prevSelected => {
      return handleSelection(prevSelected, boxerId)
    });
  },[]);

  return <>
    {!!selected.size && <NamesHeader>{Array.from(selected.keys())
      .sort((a,b) => a - b)
      .map((boxerId, index) => `${index ? ' + ' : ''}${boxersList[boxerId].name}`)}
    </NamesHeader>}
    <BoxerListWrap>
      {boxersList
        .map((boxer, index) => <BoxerDetail
          key={index}
          index={index}
          boxer={boxer}
          selected={isSelected(selected, index)}
          selectionHandler={handleBoxerClick}
        />)}
    </BoxerListWrap>
  </>
}

export default BoxerList;