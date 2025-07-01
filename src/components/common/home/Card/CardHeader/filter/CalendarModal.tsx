import { useState } from "react";
import "./CalendarModal.css";
import { Icon } from "../../../../ui/Icon/Icon";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  currentDate,
  setCurrentDate,
}) => {
  // State to hold the currently selected date.
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Calculates the number of days in the month of the given date.
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Determines the day of the week for the first day of the given month (0 = Sunday).
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Array of month names for display.
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Handles navigation to the previous month.
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  // Handles navigation to the next month.
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  // Handles the selection of a specific day.
  const handleDateSelect = (day: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(selected);
    alert(`Fecha seleccionada: ${selected.toLocaleDateString("es-ES")}`);
  };

  // Renders the days of the calendar grid, including leading empty slots.
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Adds empty divs for days before the 1st of the month.
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Adds the days of the current month.
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === currentDate.getMonth() &&
        selectedDate?.getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // If the modal is not open, return null to render nothing.
  if (!isOpen) return null;

  return (
    // Overlay that covers the background and closes the modal when clicked.
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content, prevents closing when clicked inside. */}
      <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
        <label>Fecha:</label>
        <div className="calendar-header">
          {/* Displays the current month and year. */}
          <h4>{`${
            monthNames[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`}</h4>
          <div className="calendar-nav">
            {/* Button to navigate to the previous month. */}
            <button onClick={handlePrevMonth}>
              <Icon name="leftarrow" width={25} />
            </button>
            {/* Button to navigate to the next month. */}
            <button onClick={handleNextMonth}>
              <Icon name="rightarrow" width={25} />
            </button>
          </div>
        </div>
        <div className="calendar-weekdays">
          <div>lun</div>
          <div>mar</div>
          <div>mié</div>
          <div><div>jue</div></div>
          <div>vie</div>
          <div>sáb</div>
          <div>dom</div>
        </div>
        <div className="calendar-grid">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};