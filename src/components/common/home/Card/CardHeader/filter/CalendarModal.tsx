import { useState } from "react";
import "./CalendarModal.css";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

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

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(selected);
    alert(`Fecha seleccionada: ${selected.toLocaleDateString("es-ES")}`);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Agregar días vacíos al inicio
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Agregar días del mes
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
        <div className="calendar-header">
          <h4>{`${
            monthNames[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`}</h4>
          <div className="calendar-nav">
            <button onClick={handlePrevMonth}>&lt;</button>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>
        <div className="calendar-weekdays">
          <div>lun</div>
          <div>mar</div>
          <div>mié</div>
          <div>jue</div>
          <div>vie</div>
          <div>sáb</div>
          <div>dom</div>
        </div>
        <div className="calendar-grid">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};
