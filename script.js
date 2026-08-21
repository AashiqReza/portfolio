const navLinks = [...document.querySelectorAll(".nav-links a")];
const ids = ["top", ...navLinks.map((link) => link.getAttribute("href")?.slice(1)).filter(Boolean)];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible?.target.id) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.15, 0.45] },
);

ids.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});
