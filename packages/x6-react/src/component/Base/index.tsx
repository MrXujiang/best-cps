import React from 'react';
import { Button } from 'antd';
import { Graph, DataUri, Shape } from '@antv/x6';

const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40,       // Number，必选，节点位置的 x 值
      y: 40,       // Number，必选，节点位置的 y 值
      // rx: 5,
      // ry: 5,
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160,      // Number，必选，节点位置的 x 值
      y: 180,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
      shape: 'ellipse'
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
      connector: 'rounded',
      vertices: [
        { x: 100, y: 200 }, 
        { x: 300, y: 120 },
      ],
      router: 'manhattan',
      label: 'dooring'
    },
  ],
};

interface IState {
  scale: number
  translate: [number, number]
}

class GraphComponent extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scale: 1,
      translate: [0, 0]
    }
  }

  graphRef = React.createRef<any | null>()

  createRect = (id: string, w: number, h: number, label: string) => {
    const rect = new Shape.Rect({
      id,
      x: 40,
      y: 40,
      width: w,
      height: h,
      label, 
      zIndex: 2,
    })
    this.graphRef.current.addNode(rect)
  }

  handleScale = () => {
    this.setState(prev => {
      const curScale = prev.scale
      // 缩放是递增的
      this.graphRef.current.zoom(0.1)
      return {
        scale: curScale
      }
    })
  }

  handleTranslate = () => {
    this.setState(prev => {
      const curTransform = prev.translate.map(v => v + 10) as [number, number]
      const [x, y] = curTransform
      this.graphRef.current.translate(x, y)
      return {
        translate: curTransform
      }
    })
  }

  handleToSvg = () => {
    this.graphRef.current.toSVG((dataUri: string) => {
      // 下载
      DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg')
    })
  }

  handleDispose = () => {
    this.graphRef.current.dispose()
  }

  render() {
    return <div>
      <div id="container"></div>
      <Button onClick={this.handleScale}>缩放</Button>
      <Button onClick={this.handleTranslate}>平移</Button>
      <Button onClick={this.handleToSvg}>导出SVG</Button>
      <Button onClick={this.handleDispose}>销毁画布</Button>
      <Button onClick={() => this.createRect(String(Date.now()), 100, 60, '矩形')}>创建矩形</Button>
    </div>
  }
  componentDidMount() {
    this.graphRef.current = new Graph({
      container: document.getElementById('container') as HTMLDivElement,
      width: 600,
      height: 400,
      grid: {
        size: 10,      // 网格大小 10px
        visible: true, // 渲染网格背景
      },
      panning: {
        enabled: true,
        eventTypes: ['leftMouseDown', 'mouseWheel']
      },
    });
    this.graphRef.current.fromJSON(data)
    this.graphRef.current.centerContent()
  }
}

export default GraphComponent
