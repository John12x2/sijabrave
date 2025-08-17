function openNav() {
  document.getElementById("navbar").style.width = "250px";
  document.body.classList.add("menu-open"); // 👈 Add class
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  document.body.classList.remove("menu-open"); // 👈 Remove class
}

function toggleQuote(id) {
  const quote = document.getElementById(id);
  const isAlreadyOpen = quote.classList.contains("show");
  const allQuotes = document.querySelectorAll('.quote');

  // Collapse all quotes
  allQuotes.forEach((q) => {
    if (q.classList.contains("show")) {
      const qHeight = q.scrollHeight + "px";
      q.style.height = qHeight;
      q.style.opacity = 1;

      requestAnimationFrame(() => {
        q.classList.remove("show");
        q.style.height = "0px";
        q.style.opacity = 0;
      });

      q.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "height") {
          q.style.display = "none";
          q.removeEventListener("transitionend", handler);
        }
      });
    }
  });

  // If it's already open, we just closed it above, so we're done
  if (isAlreadyOpen) return;

  // Otherwise, open the selected one
  quote.style.display = "block";
  quote.style.height = "auto";
  const height = quote.scrollHeight + "px";
  quote.style.height = "0px";
  quote.style.opacity = 0;

  requestAnimationFrame(() => {
    quote.classList.add("show");
    quote.style.height = height;
    quote.style.opacity = 1;
  });

  quote.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "height") {
      quote.style.height = "auto";
      quote.removeEventListener("transitionend", handler);
    }
  });
}
