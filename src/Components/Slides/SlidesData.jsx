import slide1 from '/src/assets/images/original1.jpg'
import slide2 from '/src/assets/images/breakingnews1.jpg'
import slide3 from '/src/assets/images/biggestevents1.jpg'

import slide4 from '/src/assets/images/ForPadsMobile/HomePage/originalSmallScreen.jpg'
import slide5 from '/src/assets/images/ForPadsMobile/HomePage/breakingNews.jpg'
import slide6 from '/src/assets/images/ForPadsMobile/HomePage/BiggestEvents.jpg'

import CBS  from '/src/assets/images/CBS SPORTS.png'
import ESPN  from '/src/assets/images/ESPN.png'
import FS1  from '/src/assets/images/FS1.svg'
import NFL  from '/src/assets/images/NFL.png'

import ABC  from '/src/assets/images/abcnews.png'
import CNN  from '/src/assets/images/CNN.svg'
import MSN  from '/src/assets/images/MSN.png'
import FOX  from '/src/assets/images/Fox.svg'

import EMMYS  from '/src/assets/images/emmys.png'
import GOLDENGLOBE  from '/src/assets/images/goldenglobe.png'
import GRAMMYS  from '/src/assets/images/grammys.png'
import OSCARS  from '/src/assets/images/oscars.png'

export const SlidesData = [
    {
        id: 1,
        img: slide1, 
        img2: slide4,
        header: 'Live Sports',
        description: 'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
        channels: [CBS,  ESPN, FS1, NFL]
    },
    {
        id: 2,
        img: slide2,
        img2: slide5,
        header: 'Breaking News',
        description: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
        channels: [ABC, CNN, MSN, FOX]
    },
    {
        id: 3,
        img: slide3,
        img2: slide6,
        header: 'Biggest Events',
        description: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
        channels: [EMMYS, GOLDENGLOBE, GRAMMYS, OSCARS]
    },
] 