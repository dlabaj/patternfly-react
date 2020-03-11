import React from 'react';
import { DataToolbarChip, SelectOptionObject } from '@patternfly/react-core';

export class DataToolbarChipOption implements DataToolbarChip, SelectOptionObject {
  key: string;
  node: React.ReactNode;
  constructor(key: string, node: React.ReactNode) {
    this.key = key;
    this.node = node;
  }

  toString(): string {
    return this.node.toString();
  }
}
