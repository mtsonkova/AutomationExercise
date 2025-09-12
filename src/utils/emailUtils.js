export function generateRandomEmail() {
    const randomNum = getRandomInt(1000);
    const epochMillis = Date.now(); // current time in milliseconds since epoch
    const email = `testuser${randomNum}_${epochMillis}@test.qa`;
    return email;
}


function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}