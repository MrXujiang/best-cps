import React from 'react';
import ProSkeleton from 'xu-skeleton';

export default () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <ProSkeleton type="descriptions" />
    </div>
  );
};
