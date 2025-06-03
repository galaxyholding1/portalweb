import React, { useState } from "react";
import "./DateInput.css";
import { CalendarModal } from "../../../home/Card/CardHeader/Filter/CalendarModal";
import { Icon } from "../../Icon/Icon";

const DateInput = ({ label, value, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <div className="date-input__group">
        <div><p>{label}</p> <Icon name="calendar_days"/></div>
      </div>
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        currentDate={value}
        setCurrentDate={onChange}
      />
    </>
  );
};

export default DateInput;
