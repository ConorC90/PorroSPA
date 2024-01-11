import React from 'react';
import { UnorderList } from '../components/ContentBlock/styles';

export default function CostsBlockContent() {
  return (
    <>
      <h2>Player Fee €65</h2>
      <p>Player fee includes:</p>
      <UnorderList>
        <li>3 days of mixed Beach Ultimate</li>
        <li>Free cans!</li>
        <li>Fruit and Tapas</li>
        <li>Parties</li>
      </UnorderList>
    </>
  );
}

