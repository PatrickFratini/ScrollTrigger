import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'style.css'

gsap.registerPlugin(ScrollTrigger)
const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        markets: true,
    })

})