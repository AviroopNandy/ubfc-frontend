export function authHeader(token) {
  try {
    const header = {
      headers: {
        Authorization: token,
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return header;
  } catch (error) {
    console.log(error);
  }
}
