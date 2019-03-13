import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = [
  {
    label: "Piggybank",
    // imgPath: piggybank,
    id: "1",
    shortDesc: "Personal finance with a friend",
    fullDesc:
      "Piggybank is a personal finance app that takes your bank transactions data through the Plaid API and then uses Recharts to help visualize your spend transactions and trends. It also allows you to create budgets for specific categories, and comes with a DialogFlow chatbot, piggybot that assists you in making budgets. Piggybot also tells great jokes.",
    title: "Piggybank",
    webURL: "https://piggy-bank-app.herokuapp.com",
    youtubeURL: "https://www.youtube.com/watch?v=qCMmXo0vltQ",
    gitURL: "https://github.com/piggybank-capstone/piggybank",
  },
  {
    label: "talkwords",
    // imgPath: talkwords,
    id: "2",
    shortDesc: "translation app",
    fullDesc:
      "talkwords uses Chrome's built in Speech Recognition tool - WebSpeech - to record what a user is saying in virtually any language. It then takes the recording and translates it with Google Translate API in real-time. Some languages are have the feature to be read according to local pronunciation using the Speech Synthesis, another feature of WebSpeech API.",
    title: "talkwords",
    webURL: "",
    youtubeURL:
      "https://www.fullstackacademy.com/hackathon-presentations/talkwords",
    gitURL: "https://github.com/rebecca-chan/live-translator",
  },
  {
    label: "Pluto Games",
    // imgPath: plutogames,
    id: "3",
    shortDesc: "E-commerce platform for board and card games",
    fullDesc:
      "E-commerce platform for games. Shoppers can filter games by type, age range, and select categories. Pluto Games uses Stripe for checkout and local storage to store items added to the cart",
    title: "Pluto Games",
    webURL: "https://pluto-games.herokuapp.com/",
    youtubeURL: "",
    gitURL: "https://github.com/Goat-Pluto-Shopper/pluto-games",
  },
  {
    label: "Visit LIC",
    // imgPath: visitlic,
    id: "4",
    shortDesc: "Native Android Tour Guide App of LIC, NY",
    fullDesc:
      "Android App displaying various activities and highlights of LIC, NY. Coded in Java in Android Studio.",
    title: "Visit LIC",
    webURL: "",
    youtubeURL: "https://www.youtube.com/watch?v=NFsvb4ta0Rs",
    gitURL: "https://github.com/rebecca-chan/Visit-LIC",
  },
  {
    label: "Vimeo Cue Editor",
    // imgPath: vimeoeditor,
    id: "5",
    shortDesc:
      "Video editor that allows you to add educational cues to video player",
    fullDesc:
      "Video cue editor that allows you to add cues to video player. Front end only.",
    title: "Vimeo Cue Editor",
    webURL: "https://rebecca-chan.github.io/video-cue-editor/",
    youtubeURL: "",
    gitURL: "https://github.com/rebecca-chan/video-cue-editor",
  },
  // {
  //   label: "WWII Quiz App",
  //   // imgPath: quizapp,
  //   id: "6",
  //   shortDesc: "WWII. Quiz app in Android",
  //   fullDesc:
  //     "Quiz app on your WWII knowledge. Displays toast at the end with your results",
  //   title: "WWII Quiz App",
  //   webURL: "https://rebecca-chan.github.io/video-cue-editor/",
  //   youtubeURL: "",
  //   gitURL: "https://github.com/rebecca-chan/video-cue-editor",
  // },
]

class Projects extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Layout>
        <SEO title="Projects" />

        <h1>Projects</h1>
        <div className="projectgrid" />

        <Link to="/">{`<-Back`}</Link>
      </Layout>
    )
  }
}

export default Projects
