import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1800,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: false,
            direction: "top",
            speed: 0.05,
            random: false,
            straight: true,
            outMode: "out",
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
