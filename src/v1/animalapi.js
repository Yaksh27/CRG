const API_KEY = "HD6ERbQ9THEMw2k2WSOt+A==IsAfjRBWvREn6Dhv";

export const GetAnimalDetails = async (query) => {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(query)}`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Not able to fetch');
    }

    return data; // ✅ This is what your calling component is expecting
  } catch (error) {
    throw error;
  }
};
