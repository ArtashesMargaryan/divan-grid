import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
    return window.innerWidth > window.innerHeight ? l : p;
}

export function lastPageGridConfig() {
    return LP(
        {
            name: 'main',
            bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
            cells: [
                {
                    name: 'centr',
                    bounds: { x: 0.3333, y: 0, width: 0.3333, height: 0.8 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'logo',
                            bounds: { x: 0, y: 0, width: 1, height: 0.5 }

                        }
                    ]
                },
                {
                    name: 'left',
                    bounds: { x: 0, y: 0, width: 0.3, height: 0.8 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'left1',
                            bounds: { x: 0, y: 0, width: 1, height: 0.48 },
                        },
                        {
                            name: 'left2',
                            bounds: { x: 0, y: 0.52, width: 1, height: 0.48 },
                        },

                    ],
                },
                {
                    name: 'right',
                    bounds: { x: 0.67, y: 0, width: 0.329, height: 0.8 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'right1',
                            bounds: { x: 0, y: 0, width: 1, height: 0.48 },
                        },
                        {
                            name: 'right2',
                            bounds: { x: 0, y: 0.52, width: 1, height: 0.48 },
                        },

                    ],

                },
                {
                    name: 'futer',
                    bounds: { x: 0, y: 0.88, width: 1, height: 0.13 },
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
                    name: 'centr',
                    bounds: { x: 0, y: 0, width: 1, height: 0.25 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'logo',
                            bounds: { x: 0, y: 0, width: 1, height: 1 }

                        }
                    ]
                },
                {
                    name: 'left',
                    bounds: { x: 0, y: 0.251, width: 0.49, height: 0.7 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'left1',
                            bounds: { x: 0, y: 0, width: 1, height: 0.48 },
                        },
                        {
                            name: 'left2',
                            bounds: { x: 0, y: 0.52, width: 1, height: 0.48 },
                        },

                    ],
                },
                {
                    name: 'right',
                    bounds: { x: 0.51, y: 0.251, width: 0.49, height: 0.7 },
                    padding: 0.1,
                    cells: [
                        {
                            name: 'right1',
                            bounds: { x: 0, y: 0, width: 1, height: 0.48 },
                        },
                        {
                            name: 'right2',
                            bounds: { x: 0, y: 0.52, width: 1, height: 0.48 },
                        },

                    ],

                },
                {
                    name: 'futer',
                    bounds: { x: 0, y: 0.25, width: 1, height: 0.13 },
                    cells: [
                        {
                            name: 'futerText',
                            bounds: { x: 0.3, y: 0, width: 0.4, height: 1 },
                        },
                    ],
                },
            ],
        },
    );
}
