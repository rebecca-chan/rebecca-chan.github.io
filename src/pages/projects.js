import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "./project"

const projects = [
  {
    name: "Piggybank",
    image:
      "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/25/921973/8463e2b17ba8c9ff862f38986a1eaef5-original.png",
    id: "1",
    shortDesc: "Personal finance with a friend",
    longDesc:
      "Piggybank is a personal finance app that pulls bank transactions through Plaid visualizes transactions and trends with Recharts. It also comes with a chatbot powered by DialogFlow to provide budget recommendations.",
    title: "Piggybank",
    webURL: "https://piggy-bank-app.herokuapp.com",
    youtubeURL: "https://www.youtube.com/watch?v=qCMmXo0vltQ",
    gitURL: "https://github.com/piggybank-capstone/piggybank",
  },
  {
    name: "talkwords",
    image:
      "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d9/921966/70a22c6183dd0baa4dd8c346fa53a076-original.png",
    id: "2",
    shortDesc: "a translation app",
    longDesc:
      "talkwords uses Chrome's Speech Recognition tool WebSpeech to record speech in virtually any language. It then translates it with Google Translate API. Using the Speech Synthesis, you can play the translated recording with native pronunciation",
    title: "talkwords",
    webURL: "",
    youtubeURL:
      "https://www.fullstackacademy.com/hackathon-presentations/talkwords",
    gitURL: "https://github.com/rebecca-chan/live-translator",
  },
  {
    name: "plutogames",
    image:
      "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/e7/921971/b3d95eb7b659f9c7a1d482c59c164fb4-original.png",
    id: "3",
    shortDesc: "E-commerce platform for board and card games",
    longDesc:
      "Pluto Games is an e-commerce platform for games. Shoppers can filter games by type, age range, and select categories. Pluto Games uses Stripe for checkout and local storage to store items added to the cart",
    title: "Pluto Games",
    webURL: "https://pluto-games.herokuapp.com/",
    youtubeURL: "",
    gitURL: "https://github.com/Goat-Pluto-Shopper/pluto-games",
  },
  {
    name: "Visit LIC",
    image:
      "https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1783871-original.",
    id: "4",
    shortDesc: "Native Android Tour Guide App of LIC, NY",
    longDesc:
      "Visit LIC is a native Android App displaying various activities and highlights of LIC, NY. Coded in Java in Android Studio.",
    title: "Visit LIC",
    webURL: "",
    youtubeURL: "https://www.youtube.com/watch?v=NFsvb4ta0Rs",
    gitURL: "https://github.com/rebecca-chan/Visit-LIC",
  },
  {
    name: "Vimeo Cue Editor",
    image:
      "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/8d/931656/345daf86fcf1f5f3cb36700862d4d179-original.png",
    id: "5",
    shortDesc: "Video editor to add educational cues to video",
    longDesc: "Video cue editor that allows you to add cues to video player.",
    title: "Vimeo Cue Editor",
    webURL: "https://rebecca-chan.github.io/video-cue-editor/",
    youtubeURL: "",
    gitURL: "https://github.com/rebecca-chan/video-cue-editor",
  },
  {
    label: "WWII Quiz App",
    image:
      "https://cdn4.iconfinder.com/data/icons/jetflat-2-multimedia-vol-2/60/004_100_code_tag_brackets_coding_html_development-512.png",
    id: "6",
    shortDesc: "WWII. Quiz app in Android",
    longDesc:
      "Quiz app on your WWII knowledge. Displays toast at the end with your results",
    title: "WWII Quiz App",
    webURL: "https://rebecca-chan.github.io/video-cue-editor/",
    youtubeURL: "",
    gitURL: "https://github.com/rebecca-chan/video-cue-editor",
  },
]

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />

      <h1>Projects</h1>

      <div className="projectgrid">
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} />
        })}
      </div>
      <Link to="/">{`<-Back`}</Link>
    </Layout>
  )
}

export default Projects
