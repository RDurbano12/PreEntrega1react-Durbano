

import Cardwidget from "../CartWidget/Cartwidget";
import "./navbar.css";
import Button from '@mui/material/Button';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import GroupIcon from '@mui/icons-material/Group';


const Navbar = () => {
  
  return (
    <nav className="container_nav">
      <img className="imgLogo" src="../multimedia/logo.png"></img>
      <Button color="inherit" variant="text" startIcon={<HouseSidingIcon />}>
        HOME
      </Button>
      <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
        Terapias
      </Button>
      <Button color="inherit" variant="text" startIcon={<GroupIcon />}>
        Quienes somos?
      </Button>
      <Button color="inherit" variant="text" endIcon={<FmdGoodIcon />}>
        Sedes
      </Button>
      <Button color="inherit" variant="text" endIcon={<ContactMailSharpIcon />}>
        Contacto
      </Button>
      <Cardwidget className='car' />
    </nav>
  )
}

export default Navbar