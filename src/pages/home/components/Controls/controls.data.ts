import Inputs from 'common/store/inputs';
import { alertMessage, alertNumber } from 'pages/home/utils';
import { ControlWithButtonsProps } from '../ControlWithButtons';

const { onChange } = Inputs;

export const controlsProps: ControlWithButtonsProps[] = [
  {
    prop: 'first',
    rightButtons: [
      {
        title: 'Очистить поле ввода',
        callback: () => onChange('first', '')
      },
      {
        title: 'Поменять текст на Hello world!',
        callback: () => onChange('first', 'Hello world!')
      }
    ]
  },
  {
    prop: 'second',
    leftButtons: [
      {
        title: 'Показать Alert, если в поле ввода число',
        callback: () => alertNumber(Inputs.second)
      }
    ],
    rightButtons: [
      {
        title: 'Показать Alert с текстом в поле ввода',
        callback: () => alertMessage(Inputs.second)
      }
    ]
  }
];
