import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

interface Job {
  id: number;
  model: string;
  location: string;
  status: string;
  priority: string;
  date: string; // Format: 'YYYY-MM-DD'
  time: string;
}

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
}

const Calendar: React.FC = () => {
  // Dummy data for jobs
  const initialJobs: Job[] = [
    {
      id: 1,
      model: 'ChargePoint Home Flex',
      location: '123 Main St, Springfield',
      status: 'Unscheduled',
      priority: 'High',
      date: '2024-12-06',
      time: '10:00 AM',
    },
    {
      id: 2,
      model: 'Tesla Wall Connector',
      location: '456 Elm St, Shelbyville',
      status: 'Unscheduled',
      priority: 'Medium',
      date: '2024-12-06',
      time: '2:00 PM',
    },
    {
      id: 3,
      model: 'JuiceBox Pro 40',
      location: '789 Oak St, Capital City',
      status: 'Unscheduled',
      priority: 'Low',
      date: '2024-12-07',
      time: '9:00 AM',
    },
    // Additional dummy jobs
    {
      id: 4,
      model: 'Blink HQ 150',
      location: '321 Pine St, Ogdenville',
      status: 'Unscheduled',
      priority: 'High',
      date: '2024-12-10',
      time: '11:00 AM',
    },
    {
      id: 5,
      model: 'SemaConnect Network',
      location: '654 Maple St, North Haverbrook',
      status: 'Unscheduled',
      priority: 'Medium',
      date: '2024-12-12',
      time: '3:00 PM',
    },
    {
      id: 6,
      model: 'Enel X JuiceNet',
      location: '987 Cedar St, Brockway',
      status: 'Unscheduled',
      priority: 'Low',
      date: '2024-12-15',
      time: '8:00 AM',
    },
    {
      id: 7,
      model: 'Webasto Pure',
      location: '159 Birch St, Cypress Creek',
      status: 'Unscheduled',
      priority: 'High',
      date: '2024-12-18',
      time: '1:00 PM',
    },
    {
      id: 8,
      model: 'EVBox Elvi',
      location: '753 Walnut St, Springfield',
      status: 'Unscheduled',
      priority: 'Medium',
      date: '2024-12-20',
      time: '4:00 PM',
    },
    {
      id: 9,
      model: 'ClipperCreek HCS-40',
      location: '852 Ash St, Shelbyville',
      status: 'Unscheduled',
      priority: 'Low',
      date: '2024-12-22',
      time: '10:30 AM',
    },
    {
      id: 10,
      model: 'Siemens VersiCharge',
      location: '951 Poplar St, Capital City',
      status: 'Unscheduled',
      priority: 'High',
      date: '2024-12-25',
      time: '2:30 PM',
    },
  ];

  // State for Available and Accepted Jobs
  const [availableJobs, setAvailableJobs] = useState<Job[]>([...initialJobs]);
  const [acceptedJobs, setAcceptedJobs] = useState<Job[]>([]);

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDayJobs, setSelectedDayJobs] = useState<Job[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Handler for approving a job
  const handleApprove = (jobId: number) => {
    // Find the job in availableJobs
    const jobIndex = availableJobs.findIndex((job) => job.id === jobId);
    if (jobIndex !== -1) {
      const job = availableJobs[jobIndex];
      // Remove from availableJobs
      const newAvailableJobs = [...availableJobs];
      newAvailableJobs.splice(jobIndex, 1);
      setAvailableJobs(newAvailableJobs);

      // Update job status to "Accepted"
      const updatedJob = { ...job, status: 'Accepted' };

      // Add to acceptedJobs
      setAcceptedJobs([...acceptedJobs, updatedJob]);
    }
  };

  // Function to get accepted jobs for a specific day
  const getJobsForDay = (day: number): Job[] => {
    const dateString = `2024-12-${day.toString().padStart(2, '0')}`;
    return acceptedJobs.filter((job) => job.date === dateString);
  };

  // Function to handle day click
  const handleDayClick = (day: number) => {
    const jobsForDay = getJobsForDay(day);
    if (jobsForDay.length > 0) {
      setSelectedDayJobs(jobsForDay);
      setSelectedDate(`2024-12-${day.toString().padStart(2, '0')}`);
      setIsModalOpen(true);
    }
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDayJobs([]);
    setSelectedDate('');
  };

  return (
    <>
      <Breadcrumb pageName="Calendar" />

      {/* ====== Available Jobs Table Section Start ====== */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 mb-5">
        <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Available Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stroke dark:divide-strokedark">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  EV Charger Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Time
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-boxdark">
              {availableJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-meta-4">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.priority}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(job.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button
                      onClick={() => handleApprove(job.id)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
              {availableJobs.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    No available jobs.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* ====== Available Jobs Table Section End ====== */}

      {/* ====== Accepted Jobs Table Section Start ====== */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 mb-5">
        <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Accepted Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stroke dark:divide-strokedark">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  EV Charger Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-boxdark">
              {acceptedJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-meta-4">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.priority}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(job.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {job.time}
                  </td>
                </tr>
              ))}
              {acceptedJobs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No accepted jobs.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* ====== Accepted Jobs Table Section End ====== */}

      {/* ====== Calendar Section Start ====== */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
                (day, index) => (
                  <th
                    key={index}
                    className={`flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5 ${
                      index === 0 ? 'rounded-tl-sm' : index === 6 ? 'rounded-tr-sm' : ''
                    }`}
                  >
                    <span className="hidden lg:block"> {day} </span>
                    <span className="block lg:hidden"> {day.slice(0, 3)} </span>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {/* Generate calendar weeks */}
            {generateCalendarWeeks(2024, 12).map((week, weekIndex) => (
              <tr key={weekIndex} className="grid grid-cols-7">
                {week.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    onClick={() => day.isCurrentMonth && day.date !== 0 && handleDayClick(day.date)}
                    className={`ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31 ${
                      day.isCurrentMonth ? '' : 'bg-gray-100 dark:bg-boxdark'
                    }`}
                  >
                    {day.date !== 0 ? (
                      <span className="font-medium text-black dark:text-white">{day.date}</span>
                    ) : null}
                    {/* Display jobs for this day */}
                    {day.isCurrentMonth &&
                      day.date !== 0 &&
                      getJobsForDay(day.date).map((job) => (
                        <div
                          key={job.id}
                          className="mt-1 p-1 bg-green-100 dark:bg-meta-4 rounded text-xs text-green-700 dark:text-green-300"
                        >
                          <span className="font-semibold">{job.model}</span>
                          <br />
                          <span className="text-xs">{job.location}</span>
                        </div>
                      ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ====== Calendar Section End ====== */}

      {/* ====== Modal Start ====== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5">
            <div className="flex justify-between items-center p-4 border-b border-stroke dark:border-strokedark">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Jobs for{' '}
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {/* Jobs List */}
              <div className="mb-4">
                <h4 className="text-md font-semibold text-black dark:text-white mb-2">Scheduled Jobs:</h4>
                <ul className="space-y-2">
                  {selectedDayJobs.map((job) => (
                    <li
                      key={job.id}
                      className="p-2 border border-stroke dark:border-strokedark rounded"
                    >
                      <p className="font-medium text-gray-900 dark:text-white">{job.model}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{job.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time: {job.time}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dummy Map */}
              <div className="mb-4">
                <h4 className="text-md font-semibold text-black dark:text-white mb-2">Optimal Route:</h4>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Replace this div with an actual map integration if needed */}
                  <span className="text-gray-500 dark:text-gray-300">[Dummy Map Placeholder]</span>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h4 className="text-md font-semibold text-black dark:text-white mb-2">Summary:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Total Jobs: {selectedDayJobs.length}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Estimated Total Time: {selectedDayJobs.length * 2} hours
                </p>
                {/* You can add more information as needed */}
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-stroke dark:border-strokedark">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ====== Modal End ====== */}
    </>
  );
};

// Helper function to generate calendar weeks
const generateCalendarWeeks = (year: number, month: number): CalendarDay[][] => {
  const weeks: CalendarDay[][] = [];
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const firstWeekDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)
  const totalDays = lastDayOfMonth.getDate();

  let currentWeek: CalendarDay[] = [];

  // Fill the first week with empty days if the month doesn't start on Sunday
  for (let i = 0; i < firstWeekDay; i++) {
    currentWeek.push({ date: 0, isCurrentMonth: false });
  }

  // Fill the days of the month
  for (let day = 1; day <= totalDays; day++) {
    currentWeek.push({ date: day, isCurrentMonth: true });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill the last week with empty days if necessary
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: 0, isCurrentMonth: false });
    }
    weeks.push(currentWeek);
  }

  return weeks;
};

export default Calendar;
