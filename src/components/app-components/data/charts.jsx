

// import React from 'react';
// import dynamic from 'next/dynamic';
// import { useState } from 'react';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// const DashboardCharts = () => {
//   const [value, setValue] = useState('week');
//   const [selectedSeries, setSelectedSeries] = useState('Total Revenue'); 

//   const handleSeriesChange = (e) => {
//     setSelectedSeries(e.target.value);
//   };

//   const lineChartOptions = {
//     chart: {
//       id: 'basic-line',
//       toolbar: { show: false },
//     },
//     xaxis: {
//       categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//     },
//     stroke: { curve: 'smooth', width: 2 },
//     markers: { size: 5 },
//     colors: ['#4558e1', '#b7e1f5'], // Updated colors for Total Revenue and Total Sales
//     dataLabels: { enabled: false },
//     yaxis: { min: 0, max: 200 },
//     legend: { show: false }, // Disable default legend
//   };

//   // Conditionally render the selected series (either Revenue or Sales)
//   const lineChartSeries = selectedSeries === 'Total Revenue' ? 
//     [{ name: 'Total Revenue', data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 180, 200] }] : 
//     [{ name: 'Total Sales', data: [20, 29, 37, 36, 44, 45, 50, 58, 66, 70, 80, 90] }];

//   // Bar Chart Configuration
//   const barChartOptions = {
//     chart: {
//       id: 'basic-bar',
//       stacked: true,
//       toolbar: { show: false },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '60%',
//         endingShape: 'rounded',
//       },
//     },
//     xaxis: {
//       categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//     },
//     colors: ['#3c50e0', '#80caee'], 
//     dataLabels: { enabled: false },
//     yaxis: { min: 0, max: 100 },
//     legend: {
//       position: 'top',
//       horizontalAlign: 'left',
//     }
//   };

//   const barChartSeries = [
//     { name: 'Sales', data: [40, 50, 30, 70, 90, 70, 100] },
//     { name: 'Revenue', data: [20, 30, 10, 50, 70, 50, 80] }
//   ];

//   return (
//     <div className="flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6 w-full">
//       {/* Line Chart Container */}
//       <div className="bg-white shadow-none rounded-none w-full lg:w-2/3 p-6 min-h-[400px]">
//         <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
//           <div className="flex flex-col">
//             {/* Radio buttons for selecting chart series */}
//             <div className="flex space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   value="Total Revenue"
//                   checked={selectedSeries === 'Total Revenue'}
//                   onChange={handleSeriesChange}
//                 />
//                 <span className="text-blue-700">Total Revenue</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   value="Total Sales"
//                   checked={selectedSeries === 'Total Sales'}
//                   onChange={handleSeriesChange}
//                 />
//                 <span className="text-blue-700">Total Sales</span>
//               </label>
//             </div>
//             <p className="text-sm text-gray-400">12.04.2022 - 12.05.2022</p>
//           </div>
//           <div className="flex space-x-2 mt-4 lg:mt-0 lg:flex-row lg:space-y-2 lg:items-center">
//             <button
//               className={`py-1 px-4 ${value === 'day' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
//               onClick={() => setValue('day')}
//             >
//               Day
//             </button>
//             <button
//               className={`py-1 px-4 ${value === 'week' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
//               onClick={() => setValue('week')}
//             >
//               Week
//             </button>
//             <button
//               className={`py-1 px-4 ${value === 'month' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
//               onClick={() => setValue('month')}
//             >
//               Month
//             </button>
//           </div>
//         </div>
//         <Chart options={lineChartOptions} series={lineChartSeries} type="area" height={320} />
//       </div>

//       <div className="bg-white shadow-none rounded-none w-full lg:w-1/3 p-6 min-h-[400px]">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold">Profit this week</h3>
//           <p className="text-gray-400">This Week</p>
//         </div>
//         <Chart options={barChartOptions} series={barChartSeries} type="bar" height={300} />
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;






import React from 'react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useSelector } from "react-redux";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardCharts = () => {
  const [value, setValue] = useState('week');
  const [selectedSeries, setSelectedSeries] = useState('Total Revenue'); 
  const darkMode = useSelector((state) => state.tasks.darkMode);

  const handleSeriesChange = (e) => {
    setSelectedSeries(e.target.value);
  };

  const lineChartOptions = {
    chart: {
      id: 'basic-line',
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    stroke: { curve: 'smooth', width: 2 },
    markers: { size: 5 },
    colors: ['#4558e1', '#b7e1f5'],
    dataLabels: { enabled: false },
    yaxis: { min: 0, max: 200 },
    legend: { show: false },
  };

  const lineChartSeries = selectedSeries === 'Total Revenue' ? 
    [{ name: 'Total Revenue', data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 180, 200] }] : 
    [{ name: 'Total Sales', data: [20, 29, 37, 36, 44, 45, 50, 58, 66, 70, 80, 90] }];

  const barChartOptions = {
    chart: {
      id: 'basic-bar',
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    },
    colors: ['#3c50e0', '#80caee'],
    dataLabels: { enabled: false },
    yaxis: { min: 0, max: 100 },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    }
  };

  const barChartSeries = [
    { name: 'Sales', data: [40, 50, 30, 70, 90, 70, 100] },
    { name: 'Revenue', data: [20, 30, 10, 50, 70, 50, 80] }
  ];

  return (
    <div className="flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6 w-full">
      <div className={`shadow-none rounded-none w-full lg:w-2/3 p-6 min-h-[400px] ${darkMode ? 'bg-[#24303f]' : 'bg-white'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Total Revenue"
                  checked={selectedSeries === 'Total Revenue'}
                  onChange={handleSeriesChange}
                />
                <span className={`text-blue-700 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Total Revenue</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Total Sales"
                  checked={selectedSeries === 'Total Sales'}
                  onChange={handleSeriesChange}
                />
                <span className={`text-blue-700 ${darkMode ? 'text-white' : 'text-blue-700'}`}>Total Sales</span>
              </label>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>12.04.2022 - 12.05.2022</p>
          </div>
          <div className="flex space-x-2 mt-4 lg:mt-0 lg:flex-row lg:space-y-2 lg:items-center">
            <button
              className={`py-1 px-4 ${value === 'day' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
              onClick={() => setValue('day')}
            >
              Day
            </button>
            <button
              className={`py-1 px-4 ${value === 'week' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
              onClick={() => setValue('week')}
            >
              Week
            </button>
            <button
              className={`py-1 px-4 ${value === 'month' ? 'bg-gray-200' : 'bg-gray-100'} rounded-md`}
              onClick={() => setValue('month')}
            >
              Month
            </button>
          </div>
        </div>
        <Chart options={lineChartOptions} series={lineChartSeries} type="area" height={320} />
      </div>

      {/* Bar Chart Container */}
      <div className={`shadow-none rounded-none w-full lg:w-1/3 p-6 min-h-[400px] ${darkMode ? 'bg-[#24303f]' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Profit this week</h3>
          <p className={`text-gray-400 ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>This Week</p>
        </div>
        <Chart options={barChartOptions} series={barChartSeries} type="bar" height={300} />
      </div>
    </div>
  );
};

export default DashboardCharts;

