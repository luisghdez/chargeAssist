// components/Modal.tsx
import React, { FC } from 'react';
import DatePickerOne from './Forms/DatePicker/DatePickerOne';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (day: string, priorityTime: string, option2Time: string) => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [day, setDay] = React.useState<string>('');
  const [priorityTime, setPriorityTime] = React.useState<string>('');
  const [option2Time, setOption2Time] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    // if (!day) {
    //   alert('Please select a day.');
    //   return;
    // }
    if (!priorityTime) {
      alert('Please select a Priority Time.');
      return;
    }
    if (!option2Time) {
      alert('Please select an Option 2 Time.');
      return;
    }

    onSubmit(day, priorityTime, option2Time);

    // Reset form fields
    setDay('');
    setPriorityTime('');
    setOption2Time('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#282525] bg-opacity-80">
      <div className="bg-white dark:bg-[#241f1f] rounded-lg shadow-lg w-11/12 max-w-md">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Schedule Service
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold focus:outline-none"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          {/* Date Picker */}
          <div className="mb-4">
            <label htmlFor="day" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Day
            </label>
            <DatePickerOne />
          </div>

          {/* Priority Time */}
          <div className="mb-4">
            <label htmlFor="priorityTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Preferred Time Slot
            </label>
            <input
              type="time"
              id="priorityTime"
              value={priorityTime}
              onChange={(e) => setPriorityTime(e.target.value)}
              required
              step="1800" // 30 minutes
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#282525] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Option 2 Time */}
          <div className="mb-4">
            <label htmlFor="option2Time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Alternative Time Slot
            </label>
            <input
              type="time"
              id="option2Time"
              value={option2Time}
              onChange={(e) => setOption2Time(e.target.value)}
              required
              step="1800" // 30 minutes
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-[#282525] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
