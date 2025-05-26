import React, { useEffect, useState } from "react";
import "./RemittanceFilterListModal.css";
import DateInput from "../../ui/Input/DateInput/DateInput";
import Checkbox from "../../ui/Input/CheckboxInput/Checkbox";
import { Select } from "../../Remittance/Select/Select";

import { motion, AnimatePresence } from "framer-motion";

import NumberInput from "../../ui/Input/NumberInput/NumberInput";
import Button from "../../ui/Input/ButtonInput/Button";

export const RemittanceFilterListModal = ({
  onApplyFilters,
  onClose,
  visible,
}) => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    status: {
      confirmed: false,
      inProcess: false,
      cancelled: false,
    },
    type: undefined,
    origin: undefined,
    country: undefined,
    currency: undefined,
    minAmount: "",
    maxAmount: "",
  });

  const handleStatusChange = (status, checked) => {
    setFilters((prev) => ({
      ...prev,
      status: { ...prev.status, [status]: checked },
    }));
  };

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleClear = () => {
    setFilters({
      startDate: "",
      endDate: "",
      status: {
        confirmed: false,
        inProcess: false,
        cancelled: false,
      },
      type: "",
      origin: "",
      country: "",
      currency: "",
      minAmount: "",
      maxAmount: "",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="modal-container"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="remittance-filter"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ type: "tween", ease: "easeIn", duration: 0.2 }}
            exit={{ x: 400 }}
          >
            <div className="filter-header">
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>

            <div className="filter-section">
              <h4>Fecha de envío</h4>
              <div className="date-inputs">
                <DateInput
                  label="Desde"
                  value={filters.startDate}
                  onChange={(value) => handleChange("startDate", value)}
                />
                <DateInput
                  label="Hasta"
                  value={filters.endDate}
                  onChange={(value) => handleChange("endDate", value)}
                />
              </div>
            </div>

            <div className="filter-section">
              <h4>Estado de la remesa</h4>
              <div className="status-checkboxes">
                <Checkbox
                  label="Confirmada"
                  checked={filters.status.confirmed}
                  onChange={(checked) =>
                    handleStatusChange("confirmed", checked)
                  }
                />
                <Checkbox
                  label="En proceso"
                  checked={filters.status.inProcess}
                  onChange={(checked) =>
                    handleStatusChange("inProcess", checked)
                  }
                />
                <Checkbox
                  label="Cancelada"
                  checked={filters.status.cancelled}
                  onChange={(checked) =>
                    handleStatusChange("cancelled", checked)
                  }
                />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-selects">
                <Select
                  className="form-group"
                  placeholder="Tipo de remesa"
                  value={filters.type}
                  onChange={(value) => handleChange("type", value)}
                  options={[
                    { label: "Todas", value: "" },
                    { label: "Nacional", value: "nacional" },
                    { label: "Internacional", value: "internacional" },
                  ]}
                />

                <Select
                  placeholder="Origen del dinero"
                  value={filters.origin}
                  onChange={(value) => handleChange("origin", value)}
                  options={[
                    { label: "Todos", value: "" },
                    { label: "Cuenta bancaria", value: "cuenta" },
                    { label: "Efectivo", value: "efectivo" },
                    { label: "Tarjeta", value: "tarjeta" },
                  ]}
                />

                <Select
                  placeholder="País"
                  value={filters.country}
                  onChange={(value) => handleChange("country", value)}
                  options={[
                    { label: "Todos", value: "" },
                    { label: "Venezuela", value: "VE" },
                    { label: "Colombia", value: "CO" },
                    { label: "Perú", value: "PE" },
                  ]}
                />

                <Select
                  placeholder="Moneda"
                  value={filters.currency}
                  onChange={(value) => handleChange("currency", value)}
                  options={[
                    { label: "Todas", value: "" },
                    { label: "USD", value: "USD" },
                    { label: "EUR", value: "EUR" },
                    { label: "VES", value: "VES" },
                  ]}
                />
              </div>
            </div>

            <div className="filter-section">
              <h4>Importe</h4>
              <div className="amount-inputs">
                <NumberInput
                  label="Mínimo"
                  value={filters.minAmount}
                  onChange={(value) => handleChange("minAmount", value)}
                  type="minus"
                />
                <NumberInput
                  label="Máximo"
                  value={filters.maxAmount}
                  onChange={(value) => handleChange("maxAmount", value)}
                  type="plus"
                />
              </div>

              <div className="filter-actions">
                <Button
                  className="buttonFilter"
                  variant="primary"
                  fullWidth
                  onClick={handleApply}
                >
                  aplicar filtros
                </Button>
                <Button
                  className="buttonFilter"
                  variant="secondary"
                  fullWidth
                  onClick={handleClear}
                >
                  limpiar filtros
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
