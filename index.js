// 文字動畫
let homepage__title = document.querySelector('.homepage__title__1')
homepage__title.innerHTML = homepage__title.textContent.replace(
  /\S/g,
  "<span class='letter__homepage__title'>$&</span>"
)
let homepage__subtitle = document.querySelector('.homepage__title__2')
homepage__subtitle.innerHTML = homepage__subtitle.textContent.replace(
  /\S/g,
  "<span class='letter__homepage__subtitle'>$&</span>"
)

anime
  .timeline({ loop: false })
  .add({
    targets: '.homepage__title__1 .letter__homepage__title',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 950,
    delay: (el, i) => 80 * i,
  })
  .add({
    targets: '.homepage__title__1',
    opacity: 1,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  })
anime
  .timeline({ loop: false })
  .add({
    targets: '.homepage__title__2 .letter__homepage__subtitle',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 4250,
    delay: 1500,
  })
  .add({
    targets: '.homepage__title__2',
    opacity: 1,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  })
