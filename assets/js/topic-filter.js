// Topic filter for the Articles page. Selecting several topics shows only entries tagged with ALL of them.
document.addEventListener("DOMContentLoaded", function () {
  const buttons = Array.from(document.querySelectorAll(".topic-btn[data-topic]"));
  const clearButton = document.querySelector(".topic-btn[data-clear]");
  const status = document.querySelector(".topic-filter-status");
  const lists = Array.from(document.querySelectorAll(".publications ol.bibliography"));

  const entries = [];
  lists.forEach(function (list) {
    Array.from(list.children).forEach(function (item) {
      const marker = item.querySelector(".pub-topics");
      const topics = marker
        ? marker.dataset.topics
            .split(",")
            .map(function (topic) {
              return topic.trim();
            })
            .filter(Boolean)
        : [];
      entries.push({ item: item, topics: topics });
    });
  });

  function apply() {
    const selected = buttons
      .filter(function (button) {
        return button.classList.contains("active");
      })
      .map(function (button) {
        return button.dataset.topic;
      });

    let shown = 0;
    entries.forEach(function (entry) {
      const matches = selected.every(function (topic) {
        return entry.topics.includes(topic);
      });
      entry.item.classList.toggle("topic-hidden", !matches);
      if (matches) shown += 1;
    });

    lists.forEach(function (list) {
      const empty = !list.querySelector(":scope > li:not(.topic-hidden)");
      list.classList.toggle("topic-hidden", empty);
      const heading = list.previousElementSibling;
      if (heading && heading.matches("h2.bibliography")) {
        heading.classList.toggle("topic-hidden", empty);
      }
    });

    if (clearButton) clearButton.classList.toggle("active", selected.length === 0);
    if (status) {
      if (selected.length === 0) {
        status.textContent = "";
      } else if (shown === 0) {
        status.textContent = "No articles match all of the selected topics.";
      } else {
        status.textContent = "Showing " + shown + " of " + entries.length + " articles.";
      }
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const active = button.classList.toggle("active");
      button.setAttribute("aria-pressed", active ? "true" : "false");
      apply();
    });
  });

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      buttons.forEach(function (button) {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      });
      apply();
    });
  }

  apply();
});
