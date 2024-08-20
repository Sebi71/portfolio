import html from '../../assets/images/skills/html.svg'
import css from '../../assets/images/skills/css.svg'
import sass from '../../assets/images/skills/sass.svg'
import js from '../../assets/images/skills/javascript.svg'
import react from '../../assets/images/skills/react.svg'
import redux from '../../assets/images/skills/redux.svg'
import figma from '../../assets/images/skills/figma.svg'
import git from '../../assets/images/skills/git.svg'
import vscode from '../../assets/images/skills/vscode.svg'
import firebase from '../../assets/images/skills/firebase.svg'

import node from '../../assets/images/skills/nodejs.svg'
import mongo from '../../assets/images/skills/mongodb.svg'
import mysql from '../../assets/images/skills/mysql.svg'
import php from '../../assets/images/skills/php.svg'
import python from '../../assets/images/skills/python.svg'

import jest from '../../assets/images/skills/jest.svg'

const skillsForProject = {
  "HTML": html,
  "CSS": css,
  "SASS": sass,
  "JavaScript": js,
  "ReactJS": react,
  "Redux": redux,
  "Figma": figma,
  "Git": git,
  "VsCode": vscode,
  "Firebase": firebase,
  "NodeJS": node,
  "MongoDB": mongo,
  "MySQL": mysql,
  "PHP": php,
  "Python": python,
  "Jest": jest,
};

const acquiredSkills = [
  {
    icon: html,
    title: "HTML",
  },
  {
    icon: css,
    title: "CSS",
  },
  {
    icon: sass,
    title: "SASS",
  },
  {
    icon: js,
    title: "JavaScript",
  },
  {
    icon: react,
    title: "ReactJS",
  },
  {
    icon: redux,
    title: "Redux",
  },
  {
    icon: firebase,
    title: "Firebase",
  },
  {
    icon: figma,
    title: "Figma",
  },
  {
    icon: git,
    title: "Git",
  },
  {
    icon: vscode,
    title: "VsCode",
  },
];

const notAcquiredSkills = [
{
  icon: node,
  title: "NodeJS",  
},
{
  icon: mongo,
  title: "MongoDB",
},
{
  icon: mysql,
  title: "MySQL",
},
{
  icon: php,
  title: "PHP",
},
{
  icon: python,
  title: "Python",
},
]

export {acquiredSkills, notAcquiredSkills, skillsForProject};