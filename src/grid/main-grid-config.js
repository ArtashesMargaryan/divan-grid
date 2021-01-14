import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0, width: 1, height: 0.24 },
          padding: 0.1,
        },
        {
          name: 'left',
          bounds: { x: 0, y: 0.25, width: 0.48, height: 0.6 },
          cells: [
            {
              name: 'itemLeft',
              bounds: { x: 0, y: 0, width: 1, height: 0.75 },
            },
            {
              name: 'textLeftBolt',
              bounds: { x: 0, y: 0.75, width: 1, height: 0.15 },
            },
            {
              name: 'textLeft',
              bounds: { x: 0, y: 0.9, width: 1, height: 0.1 },
              padding: 0.01,
            },
          ],
        },
        {
          name: 'right',
          bounds: { x: 0.52, y: 0.25, width: 0.48, height: 0.6 },
          cells: [
            {
              name: 'itemRight',
              bounds: { x: 0, y: 0, width: 1, height: 0.75 },
            },
            {
              name: 'textRightBolt',
              bounds: { x: 0, y: 0.75, width: 1, height: 0.15 },
            },
            {
              name: 'textRight',
              bounds: { x: 0, y: 0.9, width: 1, height: 0.1 },
              padding: 0.01,
            },
          ],
        },
        {
          name: 'futer',
          bounds: { x: 0, y: 0.9, width: 1, height: 0.11 },
          cells: [
            {
              name: 'futerText',
              bounds: { x: 0.3, y: 0, width: 0.4, height: 1 },
            },
          ],
        },
      ],
    },
    {
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0, width: 1, height: 0.24 },
          padding: 0.1,
        },
        {
          name: 'left',
          bounds: { x: 0, y: 0.36, width: 1, height: 0.3 },
          cells: [
            {
              name: 'itemLeft',
              bounds: { x: 0, y: 0, width: 1, height: 0.75 },
            },
            {
              name: 'textLeftBolt',
              bounds: { x: 0, y: 0.75, width: 1, height: 0.15 },
            },
            {
              name: 'textLeft',
              bounds: { x: 0, y: 0.9, width: 1, height: 0.1 },
              padding: 0.01,
            },
          ],
        },
        {
          name: 'right',
          bounds: { x: 0, y: 0.68, width: 1, height: 0.3 },
          cells: [
            {
              name: 'itemRight',
              bounds: { x: 0, y: 0, width: 1, height: 0.75 },
            },
            {
              name: 'textRightBolt',
              bounds: { x: 0, y: 0.75, width: 1, height: 0.15 },
            },
            {
              name: 'textRight',
              bounds: { x: 0, y: 0.9, width: 1, height: 0.1 },
              padding: 0.01,
            },
          ],
        },
        {
          name: 'futer',
          bounds: { x: 0, y: 0.241, width: 1, height: 0.11 },
          cells: [
            {
              name: 'futerText',
              bounds: { x: 0.3, y: 0, width: 0.4, height: 1 },
            },
          ],
        },
      ],
    }
  );
}
