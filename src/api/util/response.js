export function handleResponse(response) {
  if (response.data) {
    return response.data;
  }
  return response;
}

export function handleError(error) {}
