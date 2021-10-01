import React from 'react';
import ProSkeleton from 'xu-skeleton';

export default () => (
  <div
    style={{
      background: '#fafafa',
      padding: 24,
    }}
  >
    <ProSkeleton type="result" />
  </div>
);
