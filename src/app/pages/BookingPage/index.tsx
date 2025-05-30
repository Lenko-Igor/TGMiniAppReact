import type { FC } from 'react';
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import type { SelectInfo } from 'antd/es/calendar/generateCalendar';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('DD-MM-YYYY'), mode);
};

const onSelect = (date: Dayjs, selectInfo: SelectInfo) => {
    console.log(date.format('DD-MM-YYYY'), {selectInfo});
}

const BookingPage: FC = () => {
  return (
    <div>
        <Calendar
            fullscreen={false} 
            onPanelChange={onPanelChange}
            onSelect={onSelect}
        />
    </div>
  )
}

export default BookingPage