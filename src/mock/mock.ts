import {BookingQuest} from '../store/type-store';

const mockPoint: BookingQuest[] = [
  {
    id: '',
    location: {
      address: '',
      coords: [59.968322, 30.317359]
    },
    slots: {
      today: [
        {
          time: '',
          isAvailable: false
        }
      ],
      tomorrow: [
        {
          time: '',
          isAvailable: false
        }
      ]
    }
  }
];

export {mockPoint};
