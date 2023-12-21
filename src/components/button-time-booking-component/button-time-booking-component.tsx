import {BookingTimeToday} from '../../store/type-store';
import { formatTime } from '../../utils';

type ButtonTimeBookingProps = {
  data: BookingTimeToday;
  day: string;
}

function ButtonTimeBookingComponent ({data, day}: ButtonTimeBookingProps) {

  const formattedTime = formatTime(data.time);
  return (

    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${formattedTime}`}
        name="date"
        required="required"
        defaultValue={`${day}${formattedTime}`}
        disabled={data.isAvailable}
      />
      <span className="custom-radio__label">{data.time}</span>
    </label>
  );
}

export {ButtonTimeBookingComponent};
