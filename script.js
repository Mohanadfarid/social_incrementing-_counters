const conunters = document.querySelectorAll(".counter");

conunters.forEach((counter) => {
  const max_value = +counter.getAttribute("max_value");
  const increment_value = max_value / 200;
  let i = 0;

  const update_counters = () => {
    const rounded_value = Math.ceil(i);
    counter.textContent = `${rounded_value}`;
    i = i + increment_value;
    if (i <= max_value) {
      setTimeout(() => {
        update_counters();
      }, 15);
    }
  };

  update_counters();
});
