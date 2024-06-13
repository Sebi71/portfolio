import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { skillsForProject } from "../../utils/Skills";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import "./index.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ resum, description, githubLink, liveLink,skills }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };

  return (
    <div className="accordion-container">
      <Accordion
        className="accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="accordion-title">{resum}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <div className="content-link">
            <Link 
              className="link"
              to={githubLink}
              target="_blank" 
              rel="noreferrer">
                Github <FaGithub className="link-icon" />
            </Link>
          {liveLink && (
            <Link 
              className="link"
              to={liveLink}
              target="_blank" 
              rel="noreferrer">
                Voir le projet <FaLink className="link-icon" />
            </Link>
          )}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="accordion-title">
            Compétences mises en œuvre
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="skills-container">
            {skills.map((skill) => (
              <div className="skills-content" key={skill.name}>
                <img
                  className="skills-project"
                  src={skillsForProject[skill.name]}
                  title={skill.name}
                  alt={`compétence ${skill.name}`}
                />
                <span className="skills-title">{skill.name}</span>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

CustomizedAccordions.propTypes = {
  resum: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  skills: PropTypes.array.isRequired,
};
