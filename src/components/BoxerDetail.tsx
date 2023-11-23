import { Boxer } from '../boxers';
import React, { memo } from 'react';
import { BoxerBox, BoxerDetailItem, DetailItemLabel, DetailItemValue } from '../styled';

type props = {
  index: number;
  boxer: Boxer;
  selectionHandler: (n: number) => void;
  selected: boolean;
}

const BoxerDetail = memo(({ index, boxer, selectionHandler, selected }: props) => {
  return <BoxerBox selected={selected} onClick={() => selectionHandler(index)}>
    {
      Object.entries(boxer).map(([label, value]) => <BoxerDetailItem key={`${label}${value}`}>
        <DetailItemLabel>{label}</DetailItemLabel>:&nbsp;
        <DetailItemValue>{value}</DetailItemValue>
      </BoxerDetailItem>)
    }
  </BoxerBox>
})

export default BoxerDetail;