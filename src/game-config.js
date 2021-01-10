const pageItems = [
  [
    {
      item: '1a',
      textBolt: 'Wolds Away',
      text: ' Jenny S',
    },
    {
      item: '1b',
      textBolt: 'KKH',
      text: ' 13171',
    },
  ],
  [
    {
      item: '2a',
      textBolt: 'DWR',
      text: 'Reid Ottoman',
    },
    {
      item: '2b',
      textBolt: 'DWR',
      text: 'Womb Ottoman',
    },
  ],
  [
    {
      item: '3a',
      textBolt: 'Kathy Kuo Home',
      text: 'Poala Peacock Blue Valvet Wing Lounge Chair',
    },
    {
      item: '3b',
      textBolt: 'Woodson & Rummerfields',
      text: 'Wilshire Wingback chair',
    },
  ],
];

export function gatImgFrame() {
  return pageItems;
}

const textStyle = {
  bold: {
    fontSize: 40,
    fill: 0x000000,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 30,
    fill: 0x000000,
    fontStyle: 'normal',
  },
};

export function getTextStyle() {
  return textStyle;
}

const futer = {
  text: 'Keep exploring the catalog!',
  style: {
    fontSize: 40,
    fill: 0xffffff,
  },
};

export function getFuterText() {
  return futer;
}

const gameConfig = {
  hand: 'hand'
}

const lastPageItem = {
  0: [
    'divan1',
    'divan2',
    'divan3',
    'divan4'
  ],
  1: [
    'left1',
    'left2',
    'right1',
    'right2'
  ]

}

export function getLastItem() {
  return lastPageItem
}