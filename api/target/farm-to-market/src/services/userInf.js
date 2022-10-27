export const getUserInfo = () => {
  console.log("called");
  const info = localStorage.getItem("ftm");
  if (info) {
    return JSON.parse(info);
  }

  return false;
};
