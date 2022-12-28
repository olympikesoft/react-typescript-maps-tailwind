export const getUserData = async (get, response) => {
  const userResponse = await get("/");
  if (response.ok) {
    return userResponse;
  }
  return null;
};
