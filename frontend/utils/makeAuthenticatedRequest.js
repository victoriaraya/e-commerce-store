const makeAuthenticatedRequest = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error("Request failed:", response.status, response.statusText);
    }

    return response;
  } catch (error) {
    console.error("Error making request:", error);
  }
};

export default makeAuthenticatedRequest;
