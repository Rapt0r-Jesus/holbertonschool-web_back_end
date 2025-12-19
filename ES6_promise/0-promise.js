export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve({ status: 200, body: 'Success' });
  });
}
