import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {Layout} from '@shopify/polaris';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import store from 'store-js';

import "react-datepicker/dist/react-datepicker.css";

var days = store.get('days');

export default function AhoraPicker() {
  days = store.get('days');
  var actual = 0;

  if (days[0] == null) {
    actual = days[1];
  } else {
    actual = days[0];
    days[0] = null;
    store.set('days', days);
  }

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const isWeekday = date => {
    const day = getDay(date);
    return day === actual;
  };
  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  }

  return (
    <Layout.Section>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        filterDate={isWeekday}
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="dd/MM/yyyy hh:mm aa"
      />
    </Layout.Section>
  );
}
