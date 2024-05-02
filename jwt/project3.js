const jwt = require('jsonwebtoken');
const payload = {
    prayer_time: "11:00",
    meal_time: "12:00",
    family_time: "03:00",
    // exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) 
};
function createScheduleToken(prayerTime, mealTime, familyTime) {
    const data = {prayerTime,mealTime,familyTime};
    return jwt.sign(data , 'secretKey',{expiresIn:'24h'});
}
console.log(createScheduleToken(payload.prayer_time,payload.meal_time,payload.family_time))
const token = createScheduleToken(payload.prayer_time,payload.meal_time,payload.family_time)
module.exports = token;