import React from 'react'
import Helmet from 'react-helmet'
import ModalImage from 'react-modal-image'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

import boxtsmall from '../assets/images/small/boxtsmall.jpg'
import boxtlarge from '../assets/images/large/boxtlarge.jpg'
import casmall2 from '../assets/images/small/casmall2.jpg'
import calarge from '../assets/images/large/calarge.jpg'
import axilsmall from '../assets/images/small/axilsmall.jpg'
import axil from '../assets/images/large/axil.jpg'
import fiscalize01small from '../assets/images/small/fiscalize01small.jpg'
import fiscalize01 from '../assets/images/large/fiscalize01.jpg'
import fiscalize02small from '../assets/images/small/fiscalize02small.jpg'
import fiscalize02 from '../assets/images/large/fiscalize02.jpg'
import screen01 from '../assets/images/small/screen01.jpg'
import advise01 from '../assets/images/small/advise01.jpg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Rodrigo's Projects" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            {/* <span className="image main"><img src={pic04} alt="" /></span> */}

            <h2>
              <a href="https://turn.ai" target="_blank">
                Turn Technologies Screen App
              </a>
            </h2>
            <p>
              I worked on Turn's Screening app, one of the most advanced Human
              Resources apps for background checks in the industry.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={screen01}
                  large={screen01}
                  alt="Screen dashboard"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={advise01}
                  large={advise01}
                  alt="Advise dashboard"
                />
              </div>
            </div>

            <h2 style={{ marginLeft: '20px' }}>
              <a
                href="https://fiscalize.agefis.fortaleza.ce.gov.br/v2/#/"
                target="_blank"
              >
                Fiscalize Fortaleza
              </a>
            </h2>
            <p>
              I created and maintained the law enforcement system for the city
              of Fortaleza in Brazil. Since Fortaleza is a city with 3million+
              citizens, this was a massive system with data coming from many
              different sources and used on a daily basis by all law enforcement
              agents and managers. It was made using React, Redux and a Java
              backend.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={fiscalize01small}
                  large={fiscalize01}
                  alt="Fiscalize Dashboard Screen"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={fiscalize02small}
                  large={fiscalize02}
                  alt="Fiscalize screen"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a href="https://www.drinkboxt.com" target="_blank">
                BOXT
              </a>
            </h2>
            <p>
              A web app for USA&apos;s biggest boxed wine seller. It has the
              usual e-commerce features, plus a complete dashboard where the
              client may change any copy in the site easily with no code and a
              custom blog. Made with React, Redux, Next and Ruby on Rails.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={boxtsmall}
                  large={boxtlarge}
                  alt="BOXT screenshots"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a href="https://www.containeralliance.com/#/" target="_blank">
                Container Alliance
              </a>
            </h2>
            <p>
              A web app for USA&apos;s largest network of storage containers. It
              connects to many different container sellers based on the
              customer's region. It has a full dashboard which provides data
              about sellers, customers and leads. Made with Vuejs, Nuxt and Ruby
              on Rails.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={casmall2}
                  large={calarge}
                  alt="Container Alliance screenshots"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a href="https://www.goaxil.com/pages/gsextreme" target="_blank">
                Mediawire speed pages
              </a>
            </h2>
            <p>
              I had to develop various landing pages for different Media wire
              products. One thing to notice is that they had to be pixel
              perfect, responsive and FAST. I had to learn a lot about page
              optimization to solve this client's problem. Most of these were
              built with React and Vue with Next/Nuxt and Tailwindcss.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={axilsmall}
                  large={axil}
                  alt="Media Wire screenshots"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a
                href="https://github.com/RohanMelo/cocktail-collector-frontend"
                target="_blank"
              >
                Cocktail Collector
              </a>
            </h2>
            <p>
              Cocktail Collector is an app for users to share their cocktail
              recipes. It's possible to create new cocktails once logged in,
              edit recipes, delete cocktails and of course, browse your
              collection using a search bar. It is made in React,
              fully-responsive and designed with a 'mobile-first' pattern, with
              the help of TailwindCSS. Some screenshots and a responsive design
              example:
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={
                    'https://i.postimg.cc/sXj0yJpL/cocktailcollector01small.jpg'
                  }
                  large={
                    'https://i.postimg.cc/yYt59cHJ/cocktailcollector01.jpg'
                  }
                  alt="Cocktail Collector Screens"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={
                    'https://i.postimg.cc/4x36JFMV/cocktailresponsivesmall.jpg'
                  }
                  large={'https://i.postimg.cc/D0KQnfkw/cocktailresponsive.jpg'}
                  alt="Cocktail Collector Screens"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a href="https://github.com/RohanMelo/cinne-lead" target="_blank">
                Cinne Lead
              </a>
            </h2>
            <p>
              A React Native mobile client for TheMovieDB. Displays movies that
              are now playing in theaters, lets the user search movies by movie
              name or genres and displays more details about a selected movie.
              It was made with accessibility in mind, it is TalkBack and font
              scaling friendly with high contrast colors.
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={'https://i.postimg.cc/tJ6YKMcz/cinnesmall.jpg'}
                  large={'https://i.postimg.cc/pXN9fP9c/cinne.jpg'}
                  alt="Cinne Lead screenshots"
                />
              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}>
              <a href="https://github.com/RohanMelo/rpsls" target="_blank">
                Rock Paper Scissors Lizard Spock
              </a>
            </h2>
            <p>
              RPSLS is an extension of the classic game of chance Rock Paper
              Scissors. It was made popular by The Big Bang Theory series, and
              you have much less chance to get a tie compared to the original
              game. This version is for React Native, uses a simple touch to
              start the game and face the computer opponent. The computer choice
              is randomly selected, and then the results are shown - I've
              consciously avoided a long chain of ifs/elses on this one, of
              course. Screenshots:{' '}
            </p>
            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={'https://i.postimg.cc/4mZNxM4t/rpsls01small.jpg'}
                  large={'https://i.postimg.cc/MZDtqRHk/rpsls01.jpg'}
                  alt="RPSLS Screens"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/F7ZFdZ16/rpsls02small.jpg'}
                  large={'https://i.postimg.cc/B6C5Z9q5/rpsls02.jpg'}
                  alt="RPSLS Screens"
                />
              </div>
            </div>
            <h2 style={{ marginTop: '20px' }}>
              <a href="http://bandacanil.surge.sh" target="_blank">
                Site for the Brazilian Rock Band Canil (surge.sh link)
              </a>
            </h2>
            <p>
              React website for a really good local rock band. It was used to
              announce their upcoming gig at the time. Since the event already
              happened, the counter on the surge.sh site is all zeros now. I
              used older React syntax on it, and it's really only optimized for
              desktop view. It still had some nice features, such as an image
              carousel, animations and a map view for the location. Screenshots:{' '}
            </p>

            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={'https://i.postimg.cc/vDmtNQ62/canil01small.jpg'}
                  large={'https://i.postimg.cc/mb34fLMv/canil01.jpg'}
                  alt="CANIL Band"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/nMwG864F/canil02small.jpg'}
                  large={'https://i.postimg.cc/9mWhc6Yr/canil02.jpg'}
                  alt="CANIL Band"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/mtzNT8jQ/canil03small.jpg'}
                  large={'https://i.postimg.cc/0kcqjVVZ/canil03.jpg'}
                  alt="CANIL Band"
                />
              </div>
            </div>
            <h2 style={{ marginTop: '20px' }}>
              <a href="https://github.com/RohanMelo/limitime" target="_blank">
                LimiTimers
              </a>
            </h2>
            <p>
              A React Native productivity app. It can store multiple independent
              timers, each with a Start/Stop button and a Remove button. I chose
              not to use Expo on this one, to get used to the Expo-less workflow
              of React Native. Screenshots:{' '}
            </p>
            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={'https://i.postimg.cc/f3ySzbjJ/limitimers01small.jpg'}
                  large={'https://i.postimg.cc/wTvwTV1K/limitimers01.png'}
                  alt="LimiTimers - React Native"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/Z9QBChVj/limitimers03small.jpg'}
                  large={'https://i.postimg.cc/Nj2bRj8p/limitimers03.png'}
                  alt="LimiTimers - React Native"
                />
              </div>
            </div>
            <h2 style={{ marginTop: '20px' }}>
              <a
                href="https://github.com/RohanMelo/python-text-to-image"
                target="_blank"
              >
                Python Text to Image
              </a>
            </h2>
            <p>
              A Python command line program that downloads the image of a given
              URL and puts text on its top and bottom, according to the image
              height/width and the user specified font. It's very useful to
              generate custom images in the popular meme format. Screenshots:{' '}
            </p>
            <div style={{ display: 'flex' }}>
              <div>
                <ModalImage
                  small={'https://i.postimg.cc/sMHfj42R/meme03small.jpg'}
                  large={'https://i.postimg.cc/hPvbLt8N/meme03.jpg'}
                  alt="Python Text-To-Image"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/DSwy3Mng/meme02small.jpg'}
                  large={'https://i.postimg.cc/fWBfS9dx/meme02.jpg'}
                  alt="Python Text-To-Image"
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
