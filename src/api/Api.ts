export async function getData<T>(url: string): Promise<T> {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

