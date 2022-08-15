
import './App.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NftCollection from './components/nftCollection/NftCollection';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import NftTeam from './components/nftTeam/NftTeam';
import AreYouBullish from './components/areYouBullish/AreYouBullish';
import About from './components/about/About';
import FAQ from './components/faq/FAQ';
import TimeLine from './components/timeLine/TimeLine';
const options = {

  responsive: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    900: {
      items: 3
    }


  }
};


function App() {
  //Navbar active

  var navli = document.getElementsByClassName("btn-close-canvas");
  function activeNav() {
    let i
    let current = "";
    var sections = document.getElementsByTagName('section')
    for (i = 0; i < sections.length; i++) {
      let section = sections[i]
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute("id");
      }


    }
    for (let j = 0; j < navli.length; j++) {
      var li = navli[j]
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active")
      }
    }
  }
  window.onscroll = function () {
    activeNav()
  }



  return (
    <div className="app-wrapper">

      <div className="social-medias">
        <a href="https://discord.gg/VxkC8zmbWP"><i className="bi bi-discord"></i></a>
        <a href="https://www.instagram.com/bullslodgenft" target="_blank"><i className="bi bi-instagram"></i></a>
        <a href="https://www.twitter.com/bullslodgenft" target="_blank"><i className="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/bullslodgenft" target="_blank"><i className="bi bi-facebook"></i></a>
        <a href="https://linkedin.com/company/bullslodgenft" target="_blank"><i className="bi bi-linkedin"></i></a>
      </div>
      <Navbar />
      <Banner />
      <NftCollection />
      <AreYouBullish />
      <About />
      <TimeLine />
      <NftTeam />
      <FAQ />
      <footer
        className="main-footer text-center d-flex flex-column align-items-center py-4"
      >
        <span>© 2022 - Bulls Lodge NFT - All Rights Reserved.</span>
        <span>Contact E-mail: contact@bullslodgenft.com</span>
      </footer>
    </div >
  );
}

export default App;
