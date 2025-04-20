import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import '../css/LookDetail.css';
// Import the shared popup CSS (if not already imported globally or via LookDetail.css)
// Assuming ExpertPopup.css needs to be imported if not already covered.
import '../../styles/ExpertPopup.css'; 

// Import the ExpertPopup component
import ExpertPopup from './ExpertPopup';

// Import necessary icons (add missing ones if needed)
import CropIcon from '@mui/icons-material/Crop';
import TuneIcon from '@mui/icons-material/Tune';
import GridOnIcon from '@mui/icons-material/GridOn';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

// Import assets with corrected paths
import areta360Logo from '../../assets/images/areta360.png';
import cartIcon from '../../assets/icon/cart-icon.png';
import starIcon from '../../assets/icon/star.png';
import bagIcon from '../../assets/icon/bag.png';
import toolsIcon from '../../assets/icon/tools.png';
import collarIcon from '../../assets/icon/collar.png';
import stylesIcon from '../../assets/icon/styles.png';
import pantIcon from '../../assets/icon/pant.png';
import coatIcon from '../../assets/icon/coat.png';
import heartIcon from '../../assets/icon/heart.png';
import cameraIcon from '../../assets/icon/camera.png';
import whiteModelImage from '../../assets/images/white dress model (1).png';
import style1Image from '../../assets/images/style1.png';
import style2Image from '../../assets/images/style2.png';
import style3Image from '../../assets/images/style3.png';
import style4Image from '../../assets/images/style4.png';
import style5Image from '../../assets/images/style5.png';
import style6Image from '../../assets/images/style6.png';

// Define the tools array (similar to Look.js)
const toolsArray = [
  { id: 'crop', icon: <CropIcon />, label: 'Crop' },
  { id: 'adjust', icon: <TuneIcon />, label: 'Adjust' },
  { id: 'grid', icon: <GridOnIcon />, label: 'Grid' },
  { id: 'ruler', icon: <StraightenIcon />, label: 'Ruler' },
  { id: 'price', icon: <AccountBalanceWalletIcon />, label: 'Price' },
  { id: 'close', icon: <CloseIcon />, label: 'Close' } // Assuming close functionality here
];

const LookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('accessories');
  const [activeCategory, setActiveCategory] = useState('collar');
  const [showExpertPopup, setShowExpertPopup] = useState(false);
  // State for the *main* tool selection (Crop, Adjust, etc.)
  const [selectedMainTool, setSelectedMainTool] = useState(null);
  const [activeFooterStyle, setActiveFooterStyle] = useState(null); // Track active style in footer

  const sizes = ['M', 'L', 'XL', 'XXL', '3XL'];

  const styleOptions = [
    {
      id: 1,
      image: style1Image,
      name: 'Basic jumpers',
      category: 'Summer'
    },
    {
      id: 2,
      image: style2Image,
      name: 'Warm puffer',
      category: 'Summer'
    },
    {
      id: 3,
      image: style3Image,
      name: 'Bomber',
      category: 'Summer'
    },
    {
      id: 4,
      image: style4Image,
      name: 'Biker jacket',
      category: 'Summer'
    },
    {
      id: 5,
      image: style5Image,
      name: 'Summer Style',
      category: 'Summer'
    },
    {
      id: 6,
      image: style6Image,
      name: 'Casual Look',
      category: 'Summer'
    }
  ];

  const handleStarClick = () => {
    navigate(`/look-alt/${id || '1'}`);
  };

  // Handler to open the popup
  const handleOpenExpertPopup = (styleName) => {
    setShowExpertPopup(true);
  };
  
  // Placeholder handler for heart button click (stops propagation)
  const handleHeartClick = (e) => {
    e.stopPropagation();
    // Add actual favorite toggle logic here if needed
  };

  // Handler for the main tool buttons (Crop, Adjust, etc.)
  const handleMainToolClick = (toolId) => {
    if (toolId === 'close') {
      navigate('/'); 
    } else {
      setSelectedMainTool(toolId === selectedMainTool ? null : toolId);
    }
  };

  return (
    <div className="page-container">
      <header className="header">
        <img 
          className="logo" 
          src={areta360Logo} 
          alt="Areta360" 
          onClick={() => navigate('/')} 
        />
        <IconButton className="cart-button">
          <img src={cartIcon} alt="Cart" />
        </IconButton>
      </header>

      <div className="main-content">
        <div className="main-image-section">
          <div className="action-buttons-container">
            <IconButton className="image-star-button" onClick={handleStarClick}>
              <img src={starIcon} alt="Star" />
            </IconButton>
            <IconButton className="image-heart-button">
              <img src={heartIcon} alt="Heart" />
            </IconButton>
            <IconButton className="image-camera-button">
              <img src={cameraIcon} alt="Camera" />
            </IconButton>
          </div>
          <img className="main-image" src={whiteModelImage} alt="Look" />
          <div className="image-counter">Look | 1/4</div>
        </div>

        {/* === Conditionally render the TOOLBAR NEXT TO THE IMAGE === */}
        {activeTab === 'accessories' ? (
          // Show Size Bar when Accessories tab is active
          <div className="size-bar-container"> 
            <div className="size-label">Size: {selectedSize}</div>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Show Main Tools Bar when Tools tab is active
          <div className="main-tools-bar"> 
            {/* Add Tools Label */}
            <div className="main-tools-label">Tools</div> 
            {toolsArray.map((tool) => (
              <button
                key={tool.id}
                className={`tool-button ${selectedMainTool === tool.id ? 'active' : ''}`}
                onClick={() => handleMainToolClick(tool.id)}
                title={tool.label}
              >
                {tool.icon}
              </button>
            ))}
          </div>
        )}
        {/* === End Conditional Toolbar === */}

        <div className="tools-section">
          <div className="tools-header">
            <h2 className="tools-title">
              <img className="tools-icon" src={toolsIcon} alt="Tools" />
              Choose and apply
            </h2>
          </div>

          {/* NEW: Wrapper for tabs and categories */}
          <div className="controls-container">
            {/* Accessories/Tools Tabs */}
            <div className="header-tab-buttons">
              <button
                className={`accessories-button ${activeTab === 'accessories' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('accessories');
                }}
              >
                <img src={bagIcon} alt="Accessories" />
                <span>Accessories</span>
              </button>
              <button
                className={`tools-button ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('tools');
                }}
              >
                <img src={toolsIcon} alt="Tools" />
                <span>Tools</span>
              </button>
            </div>

            {/* Divider Line */}
            <hr className="controls-divider" />

            {/* Category Bar */}
            <div className="category-bar">
              {/* Collar button restored */}
              <button
                className={`category-button ${activeCategory === 'collar' ? 'active' : ''}`}
                onClick={() => setActiveCategory('collar')}
              >
                <img src={collarIcon} alt="" />
                <span>Collar</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'styles' ? 'active' : ''}`}
                onClick={() => setActiveCategory('styles')}
              >
                <img src={stylesIcon} alt="" />
                <span>Styles</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'pant' ? 'active' : ''}`}
                onClick={() => setActiveCategory('pant')}
              >
                <img src={pantIcon} alt="" />
                <span>Pant</span>
              </button>
              <button
                className={`category-button ${activeCategory === 'coat' ? 'active' : ''}`}
                onClick={() => setActiveCategory('coat')}
              >
                <img src={coatIcon} alt="" />
                <span>Coat</span>
              </button>
            </div>
          </div>
          {/* END NEW Wrapper */}

          {/* Content Grid (Style Grid) */}
          <div className="style-grid">
            {styleOptions.map((style) => (
              <div 
                key={style.id} 
                className="style-card"
                onClick={() => {
                  handleOpenExpertPopup(style.name); 
                }}
                role="button"
                tabIndex={0}
              >
                <img className="style-image" src={style.image} alt={style.name} />
                <button 
                  className="style-heart-button"
                  onClick={handleHeartClick}
                  aria-label="Favorite"
                >
                  <img src={heartIcon} alt="" />
                </button>
                <div className="style-info">
                  <div className="style-name">{style.name}</div>
                  <div className="style-category">{style.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer MUST be INSIDE tools-section */}
          <div className="tools-footer">
            <div className="footer-style-names-scroll">
              {styleOptions.map((style) => (
                <button 
                  key={style.id} 
                  className={`footer-style-name ${activeFooterStyle === style.name ? 'active' : ''}`}
                  onClick={() => setActiveFooterStyle(style.name)}
                >
                  {style.name}
                </button>
              ))}
            </div>
            <IconButton className="search-icon-button">
              <SearchIcon />
            </IconButton>
          </div>

        </div> {/* <<< CORRECT Closing tag for tools-section */}
      </div> {/* End of main-content */}

      {/* Render the ExpertPopup */}
      <ExpertPopup 
        isOpen={showExpertPopup}
        onClose={() => setShowExpertPopup(false)}
        navigate={navigate}
      />
    </div>
  );
};

export default LookDetail; 