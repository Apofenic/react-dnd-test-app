import React from 'react';
import ReactDOM from 'react-dom';
import BodyPositionsGrid from './BodyPositionGrid';
import { observeCard } from './Methods';

const rootEl = document.getElementById('root');

observeCard(cardPositionOnBody =>
  ReactDOM.render(
    <BodyPositionsGrid cardPositionOnBody={cardPositionOnBody} />,
    rootEl
  )
);