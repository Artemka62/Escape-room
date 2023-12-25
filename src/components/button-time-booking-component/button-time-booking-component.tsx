import {useState} from 'react';
import {BookingTimeToday} from '../../store/type-store';
import {formatTime} from '../../utils';
import {useAppDispatch} from '../../hooks/use-store';
import {bookingQuestSlice} from '../../store/slices/booking-quest-slice';

type ButtonTimeBookingProps = {
  data: BookingTimeToday;
  day: string;
}

function ButtonTimeBookingComponent ({data, day}: ButtonTimeBookingProps) {
  const formattedTime = formatTime(data.time);
  const [stateRequired, setStateRequired] = useState(false);
  const dispatch = useAppDispatch();

  const dataForBooking = {
    time: data.time,
    day: day
  };

  function handleClick () {
    setStateRequired(true);
    dispatch(bookingQuestSlice.actions.dataBooking(dataForBooking));
  }

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${formattedTime}`}
        name="date"
        required={stateRequired}
        defaultValue={`${day}${formattedTime}`}
        disabled={!data.isAvailable}
        onClick ={handleClick}
      />
      <span className="custom-radio__label">{data.time}</span>
    </label>
  );
}

export {ButtonTimeBookingComponent};
