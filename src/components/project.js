import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hovered: false }
  }
  handleHover = () => {
    this.setState(state => ({ hovered: true }))
  }

  leaveHover = () => {
    this.setState(state => ({ hovered: false }))
  }

  render() {
    const { project } = this.props
    return (
      <Card
        className="card"
        key={project.id}
        onMouseOver={this.handleHover}
        onMouseLeave={this.leaveHover}
        style={{ maxWidth: 400 }}
      >
        <CardActionArea>
          <CardMedia
            className="cardMedia"
            style={{ height: 160, paddingTop: "56.25%" }}
            alt={project.name}
            image={project.image}
            p="2"
            title={project.name}
          />

          <CardContent className="cardContent" style={{ height: 200 }}>
            {this.state.hovered ? (
              <Typography style={{ fontSize: ".8em" }}>
                {project.longDesc}
              </Typography>
            ) : (
              <div>
                <Typography
                  gutterBottom
                  component="h2"
                  style={{ paddingTop: "1em" }}
                >
                  {project.title}
                </Typography>
                <Typography component="p">{project.shortDesc}</Typography>
              </div>
            )}
          </CardContent>
          {project.webURL && (
            <a href={project.webURL}>
              <IconButton aria-label="website">
                <FontAwesomeIcon icon={faLink} style={{ color: "#ffb6c1" }} />
              </IconButton>
            </a>
          )}
          {project.gitURL && (
            <a href={project.gitURL}>
              <IconButton aria-label="git-repo">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#ffb6c1" }} />
              </IconButton>
            </a>
          )}
          {project.youtubeURL && (
            <a href={project.youtubeURL}>
              <IconButton aria-label="youtube">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#ffb6c1" }}
                />
              </IconButton>
            </a>
          )}
        </CardActionArea>
      </Card>
    )
  }
}

export default ProjectCard
