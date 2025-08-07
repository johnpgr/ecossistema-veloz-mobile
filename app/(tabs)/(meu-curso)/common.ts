export const getAttendanceColor = (current: number, max: number) => {
  const percentage = (current / max) * 100;
  if (percentage >= 80) return 'text-red-600 bg-red-100';
  if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
  return 'text-green-600 bg-green-100';
};

export const getTestScoreColor = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 90) return 'text-green-600 bg-green-100';
  if (percentage >= 80) return 'text-blue-600 bg-blue-100';
  if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
  return 'text-red-600 bg-red-100';
};
