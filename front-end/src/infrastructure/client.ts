const getToken = async (code: string) => {
  try {
    const url = process.env.REACT_APP_BACKEND_URL;
    const results = await fetch(`${url}/token`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await results.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { getToken };
