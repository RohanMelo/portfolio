import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/avatarrod.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Rodrigo Melo - Portfolio" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>
                  Hey! My name is Rodrigo and I'm a React/React Native developer living in Fortaleza, Brazil. When not coding, you can find me playing the bass and videogames, reading scifi/fantasy novels (If you're looking for recommendations - check out Dune and The Name of the Wind - thank me later!) or hanging out with friends.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/projects" className="button">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Relevant Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-glass"></span>
                <h3>Cocktail Collector</h3>
                <p>
                  A single page React app that provides cocktail recipes that users can share, edit and add to their own favorite collection.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-hand-grab-o"></span>
                <h3>Rock Paper Scissors Lizard Spock</h3>
                <p>
                  The game made popular by The Big Bang Theory series, in a React Native version. You can play against Sheldon as many times as you want!
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-clock-o"></span>
                <h3>Limitimers</h3>
                <p>
                  A productivity app made with React Native. You can store multiple independent timers and run them all at once or as many as you need.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/projects" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Skills</h2>
              <p>
                While mainly working with React and React Native and the MERN stack,
                <br />
                I also know other languages/technologies
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>MERN</strong> Stack
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Python</strong> & Django
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>Mobile</strong> Development
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Postgres</strong> SQL
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>Dart</strong> & Flutter
              </li>
            </ul>
            <p className="content">

            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/projects" className="button">
                    Projects
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <p>
                Brazilian Institute of Geography and Statistics - 2017/2018
                <br />
                Wizard Idiomas - 2011-2014
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/projects" className="button special">
                    Projects
                  </Link>
                </li>

              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
