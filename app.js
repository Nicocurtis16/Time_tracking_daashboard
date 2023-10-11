document.addEventListener("DOMContentLoaded", function () {
  function updateData(timeframe) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((activity, index) => {
          const current = activity.timeframes[timeframe].current;
          const previous = activity.timeframes[timeframe].previous;
          const box = document.querySelector(`#activity-${index}`);
          box.querySelector("#hour").textContent = `${current}hrs`;
          box.querySelector(
            "#status"
          ).textContent = `Last Week- ${previous}hrs`;
        });
      });
  }

  document
    .getElementById("daily-button")
    .addEventListener("click", function () {
      updateData("daily");
    });

  document
    .getElementById("weekly-button")
    .addEventListener("click", function () {
      updateData("weekly");
    });

  document
    .getElementById("monthly-button")
    .addEventListener("click", function () {
      updateData("monthly");
    });

  // Load initial data (default: "Weekly")
  updateData("weekly");
});
