// components/TableOne.tsx
import React, { useState } from 'react';
import Modal from '../Modal'; // Ensure the path is correct
import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
];

const data = [
  {
    connectivity: 'Online',
    serialNumber: '#VF5501108***',
    model: 'EVSE Smart Elek',
    customerName: 'Arlene M***',
    customerEmail: 'arlene.m***@example.com',
    smartChargeEnable: 'Yes',
    smartChargeVehicles: 'for 3 of 4 Vehicles',
    chargerStage: 'Created - 23-Jan-22 09:02',
    chargerStatus: 'Charging',
  },
  {
    connectivity: 'Offline',
    serialNumber: '#VF5501108***',
    model: 'Innogy eBox Professional',
    customerName: 'Wade W***',
    customerEmail: 'wade.w***@example.com',
    smartChargeEnable: 'Yes',
    smartChargeVehicles: 'for 3 of 4 Vehicles',
    chargerStage: 'Commissioned - 23-Jan-22 09:18',
    chargerStatus: 'Plugged-In',
  },
  {
    connectivity: 'Online',
    serialNumber: '#AC7K-8939***',
    model: 'Enel X JuiceBox 40',
    customerName: 'Cameron W***',
    customerEmail: 'cam***@example.com',
    smartChargeEnable: 'Yes',
    smartChargeVehicles: 'for 3 of 4 Vehicles',
    chargerStage: 'Installed - 23-Jan-22 19:29',
    chargerStatus: 'Charging',
  },
  {
    connectivity: 'Offline',
    serialNumber: '#VF55011086***',
    model: 'Innogy eBox Professional',
    customerName: 'Brooklyn S***',
    customerEmail: 'brook***@example.com',
    smartChargeEnable: 'No',
    smartChargeVehicles: 'for 0 of 4 Vehicles',
    chargerStage: 'Created - 23-Jan-22 16:39',
    chargerStatus: 'Unplugged',
  },
  {
    connectivity: 'Online',
    serialNumber: '#VF55011086***',
    model: 'Easee Easee Home',
    customerName: 'Kamil W***',
    customerEmail: 'kamil***@example.com',
    smartChargeEnable: 'Yes',
    smartChargeVehicles: 'for 3 of 4 Vehicles',
    chargerStage: 'Created - 23-Jan-22 19:29',
    chargerStatus: 'Plugged-In',
  },
  {
    connectivity: 'Offline',
    serialNumber: '#VF55011086***',
    model: 'Innogy eBox Professional',
    customerName: 'Guy H***',
    customerEmail: 'haw***@example.com',
    smartChargeEnable: 'No',
    smartChargeVehicles: 'for 0 of 4 Vehicles',
    chargerStage: 'Created - 23-Jan-22 16:39',
    chargerStatus: 'Needs Service',
  },
  {
    connectivity: 'Online',
    serialNumber: '#VF55011086***',
    model: 'Schneider Electric Wallbox',
    customerName: 'Leslie A***',
    customerEmail: 'alex***@example.com',
    smartChargeEnable: 'Yes',
    smartChargeVehicles: 'for 3 of 4 Vehicles',
    chargerStage: 'Commissioned - 23-Jan-22 21:31',
    chargerStatus: 'Charging',
  },
];

const TableOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharger, setSelectedCharger] = useState<any>(null); // Replace `any` with appropriate type
  const [isSuccess, setIsSuccess] = useState(false); // State for success alert

  const openModal = (charger: any) => { // Replace `any` with appropriate type
    setSelectedCharger(charger);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCharger(null);
    setIsModalOpen(false);
  };

  const handleFormSubmit = (day: string, priorityTime: string, option2Time: string) => {
    // Handle form submission, e.g., send data to API
    console.log('Service Scheduled:', { charger: selectedCharger, day, priorityTime, option2Time });

    // Display the success alert
    setIsSuccess(true);

    // Optionally, hide the alert after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

    // Close the modal
    closeModal();
  };

  return (
    <div className="relative">
      {/* Success Alert */}
      {isSuccess && (
        <div className="fixed top-4 right-4 z-50 w-96 bg-white dark:bg-gray-800 border border-green-500 rounded-lg shadow-lg p-6 flex items-start space-x-4">
          <svg
            className="w-6 h-6 text-green-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="w-full">
            <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399]">
              Appointment Set Successfully
            </h5>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              We will notify you to confirm the schedule.
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="ml-auto text-gray-500 hover:text-gray-700 dark:hover:text-gray-100"
            aria-label="Close Alert"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
              </svg>
            </button>
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border border-stroke bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* !!! */}
          <thead className="bg-[#c4a900]">
            <tr>
              {/* Table Headers */}
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Connectivity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Serial Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Model
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Smart Charge Enable
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Charger Stage
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                Charger Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-900">
            {data.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  index % 2 === 0 ? 'bg-white dark:bg-[#241f1f]' : 'bg-gray-50 dark:bg-[#282525]'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      item.connectivity === 'Online'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.connectivity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {item.serialNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {item.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {item.smartChargeEnable}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {item.chargerStage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.chargerStatus === 'Needs Service' ? (
                    <button
                      onClick={() => openModal(item)}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none"
                    >
                      {item.chargerStatus}
                    </button>
                  ) : (
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.chargerStatus === 'Charging'
                          ? 'bg-yellow-100 text-yellow-800'
                          : item.chargerStatus === 'Plugged-In'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.chargerStatus}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default TableOne;