export async function loadAndInitSvg(filePath, container, slider) {
  const res = await fetch(filePath);
  const text = await res.text();

  // Create a DOM element from the fetched string
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  const svg = tempDiv.querySelector('svg');

  if (!svg) {
    console.error('No <svg> found in', filePath);
    return;
  }

  // Append to the container
  container.innerHTML = '';
  container.appendChild(svg);

  // Automatically get all the children of the <svg> element (elements that should be layers)
  const layers = Array.from(svg.children);

  // Set slider max value based on the number of layers minus one
  slider.max = layers.length - 1;
  slider.value = layers.length - 1;  // Start with all layers visible

  const update = () => {
    const visible = parseInt(slider.value, 10);
    layers.forEach((el, i) => {
      el.style.display = i <= visible ? '' : 'none';
    });
  };

  slider.addEventListener('input', update);
  update(); // initialize
}
