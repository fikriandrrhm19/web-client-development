export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  const parts = dateString.split(/[-/]/);

  if (parts.length === 3) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } 
  else if (parts.length === 2) {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } 
  else if (parts.length === 1 && dateString.length === 4) {
    return date.getFullYear().toString();
  }

  return date.toLocaleDateString('en-US', { year: 'numeric' });
};