import React, { useState } from "react";
import "./DateInput.css";
import { CalendarModal } from "../../../home/Card/CardHeader/Filter/CalendarModal";
import { Icon } from "../../Icon/Icon";

// DateInput Component
// This component renders a date input field with a calendar icon that opens a modal for date selection
const DateInput = ({ label, value, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
// Function to handle the click event on the calendar icon
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
