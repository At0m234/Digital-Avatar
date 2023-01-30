import fileImg from '../../images/File/file.svg';

const initialArray = [
  {
    id: 1,
    name: `file1`,
    img: fileImg,
    order: 1,
    files: [
      {
        id: 11,
        name: `file11`,
        img: fileImg,
        order: 10,
      },
      {
        id: 111,
        name: `file111`,
        img: fileImg,
        order: 11,
      },
      {
        id: 1111,
        name: `file1111`,
        img: fileImg,
        order: 12,
      },
    ],
  },
  {
    id: 2,
    name: `file2`,
    img: fileImg,
    order: 2,
    files: [
      {
        id: 22,
        name: `file22`,
        img: fileImg,
        order: 20,
      },
      {
        id: 222,
        name: `file222`,
        img: fileImg,
        order: 21,
      },
      {
        id: 2222,
        name: `file2222`,
        img: fileImg,
        order: 22,
      },
    ],
  },
  {
    id: 3,
    name: `file3`,
    img: fileImg,
    order: 3,
    files: [
      {
        id: 33,
        name: `file33`,
        img: fileImg,
        order: 30,
      },
      {
        id: 333,
        name: `file333`,
        img: fileImg,
        order: 31,
      },
      {
        id: 3333,
        name: `file3333`,
        img: fileImg,
        order: 32,
      },
    ],
  },
]

export default initialArray;