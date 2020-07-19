export const lastYears = (count) => {
  const now = new Date().getUTCFullYear();
  return Array(now - (now - count))
    .fill('')
    .map((v, idx) => String(now - idx));
};
