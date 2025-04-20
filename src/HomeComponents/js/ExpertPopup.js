import React, { useState } from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';

// Import necessary icons and assets (adjust paths if needed)
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import assets and styles with corrected paths
import toolsIcon from '../../assets/icon/tools.png';
import topStylistImage from '../../assets/images/topstylist.png';
import topDesignerImage from '../../assets/images/topdesigner.png';

// Import the CSS file with corrected path
import '../../styles/ExpertPopup.css';

const ExpertPopup = ({ isOpen, onClose, navigate }) => {
  if (!isOpen) {
    return null;
  }

  const expertData = [
    {
      name: 'Stella McCartney',
      image: topStylistImage,
      type: 'TOP STYLIST'
    },
    {
      name: 'Manish Malhotra',
      image: topDesignerImage,
      type: 'TOP DESIGNER'
    }
  ];

  return (
    <div 
      className="popup-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="popup-content"> 
        <div className="popup-header">
          <div>
            <h2>Talk to our Expert</h2>
            <span className="popup-subtitle">
              <HelpOutlineIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: '4px' }}/> 
              Stylist/Designer
            </span>
          </div>
        </div>
        <div className="tab-container">
          <button className="popup-tab active">PICK NOW</button>
          <button className="popup-tab">CHAT NOW</button>
        </div>
        <div className="popup-message">
          <img src={toolsIcon} alt="" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          Got stuck? Don't worry! Choose a top designer and let them help you.
        </div>
        <div className="experts-grid">
          {expertData.map((expert, index) => (
             <div key={index} className="expert-card">
               <div className="expert-label">{expert.type}</div>
               <img className="expert-image" src={expert.image} alt={expert.name} />
               <div className="expert-name">{expert.name}</div>
             </div>
          ))}
        </div>
        <button 
          className="explore-button" 
          onClick={() => navigate('/stylists')}
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default ExpertPopup; 