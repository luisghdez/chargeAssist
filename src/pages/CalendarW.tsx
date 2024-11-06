import React from 'react';
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

const Calendar: React.FC = () => {
  // Dummy data for jobs
  const jobs: Job[] = [
    {
      id: 1,
      model: 'ChargePoint Home Flex',
      location: '123 Main St, Springfield',
      status: 'Unscheduled',
      priority: 'High',
      date: '2024-12-05',
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

  // Handler for approving a job
  const handleApprove = (jobId: number) => {
    // Implement approval logic here
    console.log(`Job ${jobId} approved`);
    // For example, update the job status in state or send a request to the backend
  };

  // Function to get jobs for a specific day
  const getJobsForDay = (day: number): Job[] => {
    const dateString = `2024-12-${day.toString().padStart(2, '0')}`;
    return jobs.filter((job) => job.date === dateString);
  };

  return (
    <>
      <Breadcrumb pageName="Calendar" />

      {/* ====== Jobs Table Section Start ====== */}
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
              {jobs.map((job) => (
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
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    No pending jobs.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* ====== Jobs Table Section End ====== */}

      {/* ====== Calendar Section Start ====== */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                <th
                  key={index}
                  className={`flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5 ${
                    index === 0 ? 'rounded-tl-sm' : index === 6 ? 'rounded-tr-sm' : ''
                  }`}
                >
                  <span className="hidden lg:block"> {day} </span>
                  <span className="block lg:hidden"> {day.slice(0, 3)} </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Generate calendar weeks */}
            {generateCalendarWeeks(2024, 12).map((week, weekIndex) => (
              <tr key={weekIndex} className="grid grid-cols-7">
                {week.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31 ${
                      day.isCurrentMonth ? '' : 'bg-gray-100 dark:bg-boxdark'
                    }`}
                  >
                    <span className="font-medium text-black dark:text-white">
                      {day.date}
                    </span>
                    {/* Display jobs for this day */}
                    {day.isCurrentMonth &&
                      getJobsForDay(day.date).map((job) => (
                        <div key={job.id} className="mt-1 p-1 bg-green-100 dark:bg-meta-4 rounded text-xs text-green-700 dark:text-green-300">
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
    </>
  );
};

// Helper function to generate calendar weeks
interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
}

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
