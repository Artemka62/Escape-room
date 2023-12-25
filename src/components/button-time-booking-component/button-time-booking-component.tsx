import {BookingTime} from '../../store/type-store';
import {formatTime} from '../../utils';
import {useAppDispatch} from '../../hooks/use-store';
import {bookingQuestSlice} from '../../store/slices/booking-quest-slice';

type ButtonTimeBookingProps = {
  data: BookingTime;
  day: string;
}

function ButtonTimeBookingComponent ({data, day}: ButtonTimeBookingProps) {
  const formattedTime = formatTime(data.time);
  const dispatch = useAppDispatch();

  const dataForBooking = {
    time: data.time,
    day: day
  };

  function handleButtonClick () {
    dispatch(bookingQuestSlice.actions.dataBooking(dataForBooking));
    dispatch(bookingQuestSlice.actions.errorBooking(false));
  }

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${formattedTime}`}
        name="date"
        defaultValue={`${day}${formattedTime}`}
        disabled={!data.isAvailable}
        onClick ={handleButtonClick}
      />
      <span className="custom-radio__label">{data.time}</span>
    </label>
  );
}

export {ButtonTimeBookingComponent};
