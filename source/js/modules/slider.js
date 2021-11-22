import Swiper from "swiper";
import Story from './three/story.js';

export default () => {
  let storySlider;
  const story = new Story();

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              story.setScene(0);
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              story.setScene(1);
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              story.setScene(2);
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              story.setScene(3);
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              story.setScene(0);
            } else if (storySlider.activeIndex === 2) {
              story.setScene(1);
            } else if (storySlider.activeIndex === 4) {
              story.setScene(2);
            } else if (storySlider.activeIndex === 6) {
              story.setScene(3);
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    story.setScene(0);
    setSlider();
  });

  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `story`) {
      story.init();

      if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
        story.setScene(0);
      } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
        story.setScene(1);
      } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
        story.setScene(2);
      } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
        story.setScene(3);
      }
    }
  });

  setSlider();
};
