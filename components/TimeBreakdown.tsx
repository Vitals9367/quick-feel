import React from 'react';
import Image from 'next/image';
import { timeBreakdownData } from '@/data/timeBreakdown';
import { Card, CardContent } from './ui/card';

const TimeBreakdown: React.FC = () => {
    const totalHours = timeBreakdownData.reduce((acc, item) => {
        if (item.hours === '∞') return acc + 0;
        return acc + item.hours;
      }, 0);
      
      return (
        <Card className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <ul className="space-y-3">
                {timeBreakdownData.map((task, index) => (
                  <li key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      {task.task}
                    </span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">+ {task.hours} hours</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Total hours of headaches:</span>
                  <span className="text-2xl font-bold text-[#ff7043] underline">{'>'} {totalHours}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
};

export default TimeBreakdown;
