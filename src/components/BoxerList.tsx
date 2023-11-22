import { boxersList } from '../boxers';
import BoxerDetail from './BoxerDetail';
import React from 'react';

const BoxerList = () => {
  return <>
    {boxersList.map((boxer) => <BoxerDetail boxer={boxer} />)}
  </>
}

export default BoxerList;