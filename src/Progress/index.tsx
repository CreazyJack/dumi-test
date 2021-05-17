/*
 * @Description: Progress
 * @Date: 2021-05-17 20:21:05
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 20:33:46
 */

import React from 'react';

interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: string;
}

const Progress: React.FC<ProgressProps> = () => {
  return <div>Progress</div>;
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
};

export default Progress;
