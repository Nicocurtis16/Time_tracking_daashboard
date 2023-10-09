document.addEventListener("DOMContentLoaded", function () {
  const dashboard = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  // Function to update all titles with class "inbox1" based on the selected timeframe
  function updateTitles(timeframe) {
    const boxes = document.querySelectorAll(".inbox1");
    boxes.forEach((box, index) => {
      const sectionData = dashboard[index];
      const titleElement = box.querySelector("#title");

      // Clear existing content and add the title with the ellipsis icon
      titleElement.innerHTML = `
          ${sectionData.title} <i class="fas fa-ellipsis"></i>
        `;

      const hourElement = box.querySelector("#hour");
      const statusElement = box.querySelector("#status");

      hourElement.textContent = `${sectionData.timeframes[timeframe].current}hrs`;
      statusElement.textContent = `Last ${
        timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
      }- ${sectionData.timeframes[timeframe].previous}hrs`;
    });
  }

  // Add event listeners to buttons
  const dailyButton = document.getElementById("daily-button");
  const weeklyButton = document.getElementById("weekly-button");
  const monthlyButton = document.getElementById("monthly-button");

  dailyButton.addEventListener("click", () => {
    updateTitles("daily");
  });

  weeklyButton.addEventListener("click", () => {
    updateTitles("weekly");
  });

  monthlyButton.addEventListener("click", () => {
    updateTitles("monthly");
  });

  // Initialize the section (you can choose a default or leave it empty)
  updateTitles("weekly");
});
