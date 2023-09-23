import React from 'react';
import { SocialIcon } from 'react-social-icons'
import Button from '@mui/material/Button';

const styles = {
    container: {
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap'
    },
    containerSmall: {
        gap: '15px'
    }
};

function SocialButtons() {
    const isSmallScreen = window.innerWidth <= 600;
    return (
        <div>        
            <div style={isSmallScreen ? {...styles.container, ...styles.containerSmall} : styles.container}>
            <SocialIcon target="_blank" url="https://github.com/Samridhi16" />
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/samridhipramanik/" />
            <SocialIcon target="_blank" url="https://medium.com/@samridhipramanik" />
            <SocialIcon target="_blank" bgColor="white" fgColor="red" url="mailto:sp7612@rit.edu" />
            </div>
            <Button  style={{margin:'30px 0px', borderColor: '#d23385',borderWidth: '2px',
            fontWeight: 'bold', color: '#d23385', fontSize: '18px' , fontFamily: 'sans-serif'}} variant="outlined"  target="_blank" size="large" href="https://docs.google.com/document/d/10ke09HehKkea7QJh8uM8V0bGxhOO2tird6pZuahQ3EQ/edit?usp=sharing"> RESUME </Button>
        </div>
    );
  }
  
  export default SocialButtons;