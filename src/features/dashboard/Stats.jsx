/* eslint-disable react/prop-types */

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

// eslint-disable-next-line no-unused-vars
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  //1. bookings
  const numBookings = bookings.length;

  //2. sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3. check-ins
  const checkins = confirmedStays.length;

  //4. occupancy rate
  const accupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      ></Stat>
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title="Chech ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      ></Stat>
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(accupation * 100) + '%'}
      ></Stat>
    </>
  );
}
