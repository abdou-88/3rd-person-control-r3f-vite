import AnimatedIcon from './Icon3D'
import { iconsRight, iconsLeft } from '../../data/SkillsData'



export function Skills(props) {
   // For centering list of icons
  const idxMiddle = (iconsRight.length - 1) / 2
  return (
    <>
      {iconsLeft.map((props, i) => (
        <AnimatedIcon key={i} {...props} position-x={(i - idxMiddle) * 2} position-z={-4} />
      ))}
      {iconsRight.map((props, i) => (
        <AnimatedIcon key={i} {...props} position-x={(i - idxMiddle) * 2} />
      ))}
    </>
  )
}
