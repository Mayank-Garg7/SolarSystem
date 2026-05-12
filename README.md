# 🌌 Dynamic Solar System Simulation

## 📖 Description

This project is an interactive 2D simulation of our Solar System. Unlike standard CSS-only animations, this version uses **JavaScript and Trigonometry** to calculate orbital paths in real-time. It features the Sun, eight planets, and the Moon, all rendered with dynamic Z-indexing to simulate depth as they pass behind or in front of the Sun.

## UI Preview
<img width="1316" height="593" alt="dlfdfkdj" src="https://github.com/user-attachments/assets/4ce67d73-e4bf-43a2-908e-59de933668c6" />


## 🚀 Key Features

* **Mathematical Orbits:** Utilizes Sine and Cosine functions to map planetary coordinates.
* **Interactive Tilt:** Includes a "Scale Handler" that allows users to click and drag to change the vertical perspective (inclination) of the orbital plane.
* **Dynamic Depth:** Implements real-time `z-index` switching, so planets visually pass behind the Sun during the upper half of their orbit.
* **Control System:** Integrated **Start/Stop** functionality to pause the simulation.
* **Visual Shadows:** Each planet features a CSS-driven light and shadow layer that rotates to maintain consistent lighting relative to the Sun.

## 🛠️ Tech Stack

* **HTML5:** Structure and semantic layout.
* **CSS3:** Space-themed aesthetics, planet textures (via Cloudinary), and lighting effects.
* **JavaScript (ES6):** Core engine for orbital physics and logic.
* **jQuery:** Used for efficient DOM manipulation and event handling.

## 🕹️ Installation & Usage

1. **Clone the repository:**
```bash
git clone https://github.com/Mayank-Garg7/SolarSystem.git

```


2. **Navigate to the folder:**
```bash
cd SolarSystem

```


3. **Launch:**
Open `index.html` in any modern web browser.

**Controls:**

* **Start/Stop Buttons:** Use the controls at the bottom right to toggle motion.
* **Click & Drag:** Drag your mouse vertically anywhere on the screen to change the "tilt" of the solar system.

## 🛰️ Planetary Data logic

The simulation uses a relative speed constant ($n$) to determine orbital velocity. For example:

* **Earth:** $29.78 / n$
* **Mercury:** $47.87 / n$ (Fastest)
* **Neptune:** $5.43 / n$ (Slowest)

<img width="1170" height="617" alt="fdkljfklajfjfj" src="https://github.com/user-attachments/assets/f18ef311-e060-45c7-8100-6cf9cbc91012" />

## 🤝 Credits & Acknowledgments

* **Author:** Mayank Garg
* **Resources:** Cloudinary for planet assets, jQuery for event management.

---
