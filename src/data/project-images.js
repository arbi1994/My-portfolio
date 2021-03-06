import React from 'react';
// Styles
import * as styles from './styles.module.scss';
// Components
import Lamp from '../assets/projects-section/Lamp';
import GearMedium from '../assets/projects-section/GearMedium';
import GearSmall from '../assets/projects-section/GearSmall';
import ToolsMedium from '../assets/projects-section/ToolsMedium';
import ToolsMicro from '../assets/projects-section/ToolsMicro';

const images = [
  {
    src: <Lamp />,
    class: styles.lamp
  },
  {
    src: <GearMedium />,
    class: styles.gearMedium,
  },
  {
    src: <GearSmall />,
    class: styles.gearSmall,
  },
  {
    src: <ToolsMedium />,
    class: styles.toolsMedium,
  },
  {
    src: <ToolsMicro />,
    class: styles.toolsMicro,
  },
]

export default images;