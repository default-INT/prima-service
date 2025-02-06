const animateCounter = (element, start = 0) => {
  let startTime = null;
  const end = Number(element.dataset.toValue);
  const endsSymbl = element.dataset.endsSymbl || '';
  const duration = Number(element.dataset.duration) || 1000;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);
    const currentNumber = Math.floor(progress * (end - start) + start);

    element.textContent = currentNumber + endsSymbl;

    if (timeElapsed < duration) return requestAnimationFrame(animation);

    element.textContent = end + endsSymbl;
  }

  requestAnimationFrame(animation);
}

const onStatsIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    document.querySelectorAll('.stat-counter > .stat-counter-value').forEach(animateCounter)
    observer.unobserve(entry.target)
  });
}

const statSection = document.querySelector('.main-stat-container');

if (statSection) {
  const observer = new IntersectionObserver(onStatsIntersection, {
    threshold: 0.1
  })

  observer.observe(statSection)
}
