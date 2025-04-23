---
title: Flags
---

<div id="flags"></div>

<style>
  .svg-container svg {
    width: 300px;
    display: block;
    margin-bottom: 1rem;
    background: white;
  }

  .flag-container {
    margin-bottom: 2rem;
  }

  .svg-container svg {
    border: 1px solid #ccc;
    width: 100%;
  }

  .layer-slider {
    width: 100%;
  }
</style>

<template id="flag-editor-template">
  <div class="flag-container">
    <div class="svg-container"></div>
    <label>
      Reveal Layers:
      <input type="range" class="layer-slider" min="0" step="1" value="0">
    </label>
  </div>
</template>

<script type="module">
  import {loadAndInitSvg} from './svg-loader.js';

  // List of flag SVG files to load
  const flagFiles = [
    'flags/uk.svg',
    'flags/us.svg',
    'flags/brazil.svg',
    'flags/india.svg',
  ];

  const template = document.getElementById('flag-editor-template');
  const mainContainer = document.getElementById('flags');

  // Function to create an editor for each flag
  const createFlagEditor = async (filePath) => {
    const flagContainer = template.content.cloneNode(true);

    const svgContainer = flagContainer.querySelector('.svg-container');

    const slider = flagContainer.querySelector('.layer-slider');

    // Load and initialize SVG for the flag
    await loadAndInitSvg(filePath, svgContainer, slider);

    mainContainer.appendChild(flagContainer); // Add the flag editor to the page
  };

  // Load each flag editor
  flagFiles.forEach(createFlagEditor);
</script>
