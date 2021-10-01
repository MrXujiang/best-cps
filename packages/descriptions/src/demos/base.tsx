import React from 'react';

import ProDescriptions from '@ant-design/pro-descriptions';
import { Button } from 'antd';

export default () => {
  const a;
  return (
    <>
      <ProDescriptions column={2} title="高级定义列表" tooltip="包含了从服务器请求，columns等功能">
        <ProDescriptions.Item label="文本" valueType="option">
          <Button key="primary" type="primary">
            提交
          </Button>
        </ProDescriptions.Item>
        <ProDescriptions.Item span={2} label="文本">
          这是一段很长很长超级超级长的无意义说明文本并且重复了很多没有意义的词语，就是为了让它变得很长很长超级超级长
        </ProDescriptions.Item>
        <ProDescriptions.Item label="金额" tooltip="仅供参考，以实际为准" valueType="money">
          100
        </ProDescriptions.Item>
        <ProDescriptions.Item label="百分比" valueType="percent">
          100
        </ProDescriptions.Item>
        <ProDescriptions.Item label="代码块" valueType="code">
          {`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
        </ProDescriptions.Item>
        <ProDescriptions.Item label="JSON 代码块" valueType="jsonCode">
          {`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
        </ProDescriptions.Item>
      </ProDescriptions>
    </>
  );
};
