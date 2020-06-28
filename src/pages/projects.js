import React from 'react'
import Helmet from 'react-helmet'
import ModalImage from "react-modal-image";

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Rodrigo's Projects" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            {/* <span className="image main"><img src={pic04} alt="" /></span> */}
            <h2><a href="https://github.com/RohanMelo/cocktail-collector-frontend" target="_blank">Cocktail Collector</a></h2>
            <p>Cocktail Collector is an app for users to share their cocktail recipes. It's possible to create new cocktails once logged in, edit recipes, delete cocktails and of course, browse your collection using a search bar. It is made in React, fully-responsive and designed with a 'mobile-first' pattern, with the help of TailwindCSS. Some screenshots and a responsive design example:</p>

            <div style={{ display: 'flex' }}>
              <div>

                <ModalImage
                  small={'https://i.postimg.cc/sXj0yJpL/cocktailcollector01small.jpg'}
                  large={'https://i.postimg.cc/yYt59cHJ/cocktailcollector01.jpg'}
                  alt="Cocktail Collector Screens"
                />

              </div>
              <div style={{ marginLeft: '20px' }}>
                <ModalImage
                  small={'https://i.postimg.cc/4x36JFMV/cocktailresponsivesmall.jpg'}
                  large={'https://i.postimg.cc/D0KQnfkw/cocktailresponsive.jpg'}
                  alt="Cocktail Collector Screens"
                />

              </div>
            </div>

            <h2 style={{ marginTop: '20px' }}><a href="https://github.com/RohanMelo/rpsls" target="_blank">Rock Paper Scissors Lizard Spock</a></h2>
            <p>RPSLS is an extension of the classic game of chance Rock Paper Scissors. It was made popular by The Big Bang Theory series, and you have much less chance to get a tie compared to the original game. This version is for React Native, uses a simple touch to start the game and face the computer opponent. The computer choice is randomly selected, and then the results are shown - I've consciously avoided a long chain of ifs/elses on this one, of course. Screenshots: </p>
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
            <h2 style={{ marginTop: '20px' }}><a href="http://bandacanil.surge.sh" target="_blank">Site for the Brazilian Rock Band Canil (surge.sh link)</a></h2>
            <p>React website for a really good local rock band. It was used to announce their upcoming gig at the time. Since the event already happened, the counter on the surge.sh site is all zeros now. I used older React syntax on it, and it's really only optimized for desktop view. It still had some nice features, such as an image carousel, animations and a map view for the location. Screenshots: </p>

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
            <h2 style={{ marginTop: '20px' }}><a href="https://github.com/RohanMelo/limitime" target="_blank">LimiTimers</a></h2>
            <p>A React Native productivity app. It can store multiple independent timers, each with a Start/Stop button and a Remove button. I chose not to use Expo on this one, to get used to the Expo-less workflow of React Native. Screenshots: </p>
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
            <h2 style={{ marginTop: '20px' }}><a href="https://github.com/RohanMelo/python-text-to-image" target="_blank">Python Text to Image</a></h2>
            <p>A Python command line program that downloads the image of a given URL and puts text on its top and bottom, according to the image height/width and the user specified font. It's very useful to generate custom images in the popular meme format. Screenshots: </p>
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
