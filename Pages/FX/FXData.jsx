import veilBG from '/src/assets/images/theveil.webp'
import veillogo from '/src/assets/images/theveillogo.webp'
import shogunBG from '/src/assets/images/shogun.webp'
import shogunlogo from '/src/assets/images/shogunlogo.webp'
import delicateBG from '/src/assets/images/delicate.webp'
import delicatelogo from '/src/assets/images/delicatelogo.webp'
import bearBG from '/src/assets/images/thebear.webp'
import thebearlogo from '/src/assets/images/thebearlogo.webp'



export const FXData = [
    {
        id: 1,
        imgSrc: veilBG,
        overlay: {background: 'linear-gradient(0deg, hsla(0, 50%, 40%, 1), transparent)'},
        titleImg: veillogo,
        desc: 'Starring Elisabeth Moss, FX’s The Veil is a spy thriller that explores the surprising and fraught relationship between two women who play a deadly game of truth and lies on the road from Istanbul to Paris and London. One woman has a secret, the other a mission to reveal it before thousands of lives are lost. In the shadows, the CIA and French DGSE must work together to avert potential disaster.',
        genre: "TVMA • Thriller, Drama • TV Series (2024)",
    },
    {
        id: 2,
        imgSrc: shogunBG,
        overlay: {background: 'linear-gradient(0deg, hsla(185, 50%, 40%, 1), transparent)'},
        titleImg: shogunlogo,
        desc: "Based on James Clavell’s novel, FX’s Shōgun is set in Japan in the year 1600 at the dawn of a century-defining civil war. Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village. To experience in English, navigate to the “Shōgun (English Dub)” Series Collection on Hulu or “Extras” in Hulu on Disney+.",
        genre: "TVMA • Drama, Military & War • TV Series (2024)",
    },
    {
        id: 3,
        imgSrc: delicateBG,
        overlay: {background: 'linear-gradient(0deg, hsla(355, 50%, 40%, 1), transparent)'},
        titleImg: delicatelogo,
        desc: 'American Horror Story is an anthology horror drama series created and produced by Ryan Murphy and Brad Falchuk. The Emmy® and Golden Globe® winning franchise is produced by Twentieth Century Fox Television.',
        genre: "TVMA • Drama, Horror • TV Series (2011)",
        link: '/fx/series/americanhorrorstory',
    },
    {
        id: 4,
        imgSrc: bearBG,
        overlay: {background: 'linear-gradient(0deg, hsla(185, 50%, 40%, 1), transparent)'},
        titleImg: thebearlogo,
        desc: "FX’s critically acclaimed series The Bear is about food, family and the insanity of the grind. It’s a losing battle every day in the restaurant business, and as Carmy pushes himself harder than ever and demands excellence from his crew, they do their best to match his intensity. Their quest for culinary excellence propels them to new levels and stresses the bonds that hold the restaurant together.",
        genre: "TVMA • Comedy • TV Series (2022)",
    },
]