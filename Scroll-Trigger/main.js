import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// const img = document.querySelectorAll('.img')

// img.forEach((img2) => {
//     ScrollTrigger.create({
//         trigger: img2,
//         start: 'top 70%',
//         end: '5% 20%',
//         onToggle: (e) => console.log('isActive ---->', e.isActive),
//          onEnter: () => img2.style.transform="scale(1.5)",
//          onLeave: () => img2.style.transform="scale(1)",
//          onEnterBack: () => img2.style.transform="scale(1.5)",
//          onLeaveBack: () => img2.style.transform="scale(1)",
//         markers: true,
//         scrub: true,
//     })

// })

gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();
const img = document.querySelectorAll('.img')
 
img.forEach((img) => {
  tl.to(img, {
    scrollTrigger: {
        trigger: img,
        markers: true,
        start: "30% 70%",
        end: "70% 30%",
        scrub: true,
    },
    scale:1.5,
    });
})

