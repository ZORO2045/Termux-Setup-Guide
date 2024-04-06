document.addEventListener("DOMContentLoaded", function () {
  var days = document.getElementById("calendar");
  var prayerTable = document.getElementById("prayerTimes");

  var ramadanDays = [
    { day: 1, date: "11 March 2024", fajr: "4:43 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 2, date: "12 March 2024", fajr: "4:42 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 3, date: "13 March 2024", fajr: "4:41 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 4, date: "14 March 2024", fajr: "4:40 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 5, date: "15 March 2024", fajr: "4:39 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 6, date: "16 March 2024", fajr: "4:37 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 7, date: "17 March 2024", fajr: "4:36 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 8, date: "18 March 2024", fajr: "4:35 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 9, date: "19 March 2024", fajr: "4:33 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 10, date: "20 March 2024", fajr: "4:32 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 11, date: "21 March 2024", fajr: "4:31 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 12, date: "22 March 2024", fajr: "4:30 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 13, date: "23 March 2024", fajr: "4:28 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 14, date: "24 March 2024", fajr: "4:27 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 15, date: "25 March 2024", fajr: "4:26 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 16, date: "26 March 2024", fajr: "4:24 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 17, date: "27 March 2024", fajr: "4:23 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 18, date: "28 March 2024", fajr: "4:22 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 19, date: "29 March 2024", fajr: "4:20 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 20, date: "30 March 2024", fajr: "4:19 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 21, date: "31 March 2024", fajr: "4:18 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 22, date: "1 April 2024", fajr: "4:16 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 23, date: "2 April 2024", fajr: "4:15 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 24, date: "3 April 2024", fajr: "4:14 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 25, date: "4 April 2024", fajr: "4:12 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 26, date: "5 April 2024", fajr: "4:11 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 27, date: "6 April 2024", fajr: "4:10 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 28, date: "7 April 2024", fajr: "4:08 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 29, date: "8 April 2024", fajr: "4:07 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
    { day: 30, date: "9 April 2024", fajr: "4:06 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:30 مساءً", asr: "4:00 مساءً", maghrib: "6:30 مساءً", isha: "8:00 مساءً" },
  ];

  // اليوم الحالي
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; // تذكر أنه يجب إضافة 1 إلى الشهر لأنه يبدأ من 0

  ramadanDays.forEach(function (ramadanDay) {
    var dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = ramadanDay.day;

    // إضافة تمييز لليوم الحالي
    var dayDate = new Date(ramadanDay.date);
    var dayMonth = dayDate.getMonth() + 1;
    var dayNumber = dayDate.getDate();

    if (dayMonth === currentMonth && dayNumber === currentDay) {
      dayElement.classList.add("current-day");
    } else if (dayDate < currentDate) {
      // إذا كان اليوم أمس
      dayElement.classList.add("past-day");
    } else {
      // إذا كان اليوم غداً
      dayElement.classList.add("future-day");
    }

    dayElement.addEventListener("click", function () {
      displayPrayerTimes(ramadanDay);
    });

    var dayName = dayDate.toLocaleDateString('ar-EG', { weekday: 'long' });

    var dayText = document.createElement("div");
    dayText.textContent = dayName;
    dayElement.appendChild(dayText);

    days.appendChild(dayElement);
  });

  function displayPrayerTimes(day) {
    var prayerTableHTML = "<tr><th>الصلاة</th><th>الوقت</th></tr>";
    prayerTableHTML += "<tr><td>الفجر</td><td>" + day.fajr + "</td></tr>";
    prayerTableHTML += "<tr><td>الشروق</td><td>" + day.AlShorouk + "</td></tr>";
    prayerTableHTML += "<tr><td>الظهر</td><td>" + day.dhuhr + "</td></tr>";
    prayerTableHTML += "<tr><td>العصر</td><td>" + day.asr + "</td></tr>";
    prayerTableHTML += "<tr><td>المغرب</td><td>" + day.maghrib + "</td></tr>";
    prayerTableHTML += "<tr><td>العشاء</td><td>" + day.isha + "</td></tr>";
    prayerTable.innerHTML = prayerTableHTML;
  }
});
