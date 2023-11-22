import { Boxer } from '../boxers';
import React from 'react';
import { BoxerBox, BoxerDetailItem, DetailItemLabel, DetailItemValue } from '../styled';

type props = {
  boxer: Boxer;
}

const BoxerDetail = ({ boxer }: props) =>
  <BoxerBox>
    {
      Object.entries(boxer).map(([label, value]) => <BoxerDetailItem key={`${label}${value}`}>
        <DetailItemLabel>{label}</DetailItemLabel>:&nbsp;
        <DetailItemValue>{value}</DetailItemValue>
      </BoxerDetailItem>)
    }
  </BoxerBox>


export default BoxerDetail;