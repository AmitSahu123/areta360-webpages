import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import CropIcon from '@mui/icons-material/Crop';
import TuneIcon from '@mui/icons-material/Tune';
import GridOnIcon from '@mui/icons-material/GridOn';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import assets
import areta360Logo from '../assets/images/areta360.png';
import cartIcon from '../assets/icon/cart-icon.png';
import starIcon from '../assets/icon/star.png';
import bagIcon from '../assets/icon/bag.png';
import toolsIcon from '../assets/icon/tools.png';
import collarIcon from '../assets/icon/collar.png';
import stylesIcon from '../assets/icon/styles.png';
import pantIcon from '../assets/icon/pant.png';
import coatIcon from '../assets/icon/coat.png';
import heartIcon from '../assets/icon/heart.png';
import whiteModelImage from '../assets/images/white dress model (1).png';
import style1Image from '../assets/images/style1.png';
import style2Image from '../assets/images/style2.png';
import style3Image from '../assets/images/style3.png';
import style4Image from '../assets/images/style4.png';
import backgroundImage from '../assets/images/background.png';
import topStylistImage from '../assets/images/topstylist.png';
import topDesignerImage from '../assets/images/topdesigner.png';

interface StyleOption {
  id: number;
  image: string;
  name: string;
  category: string;
}

interface ExpertPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PopupOverlayProps {
  isOpen: boolean;
  isFullScreen?: boolean;
}

interface PopupContentProps {
  isOpen: boolean;
  isFullScreen?: boolean;
}

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  image: StyleOption;
  onExplore: () => void;
}

const ExpertPopup: React.FC<ExpertPopupProps> = ({ isOpen, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');

  if (!isOpen) return null;

  const tabs = ['All', 'Stylist', 'Designer', 'Memberships'];

  const expertData = [
    {
      name: 'Alexander McQuee',
      image: topStylistImage,
      type: 'TOP STYLIST',
      experience: 'over 14 years Exp',
      sessions: '338 Sessions ( 290 reviews)',
      available: false,
      country: '🇬🇧'
    },
    {
      name: 'Stella McCartney',
      image: topStylistImage,
      type: 'TOP STYLIST',
      experience: 'over 14 years Exp',
      sessions: '338 Sessions ( 290 reviews)',
      available: true,
      country: '🇬🇧'
    },
    {
      name: 'Alexander McQuee',
      image: topStylistImage,
      type: 'TOP STYLIST',
      experience: 'over 14 years Exp',
      sessions: '338 Sessions ( 290 reviews)',
      available: false,
      country: '🇬🇧'
    }
  ];

  return (
    <PopupOverlay 
      isOpen={isOpen} 
      isFullScreen={isFullScreen}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isFullScreen) onClose();
      }}
    >
      <PopupContent isOpen={isOpen} isFullScreen={isFullScreen}>
        {isFullScreen ? (
          <>
            <FullScreenHeader>
              <HeaderLeft>
                <BackButton onClick={() => setIsFullScreen(false)}>
                  <ArrowBackIcon /> Back
                </BackButton>
              </HeaderLeft>
              <HeaderRight>
                <HelpButton>
                  <HelpOutlineIcon /> Help
                </HelpButton>
                <LanguageButton>
                  <LanguageIcon /> UK English <KeyboardArrowDownIcon />
                </LanguageButton>
              </HeaderRight>
            </FullScreenHeader>
            <TabsContainer>
              {tabs.map(tab => (
                <TabButton
                  key={tab}
                  active={selectedTab === tab}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </TabButton>
              ))}
            </TabsContainer>
            <ExpertCardsContainer>
              {expertData.map((expert, index) => (
                <ExpertFullCard key={index}>
                  <ExpertLabel>{expert.type}</ExpertLabel>
                  {expert.available && (
                    <AvailableTag>
                      ⚡ Available ASAP
                    </AvailableTag>
                  )}
                  <ExpertFullImage src={expert.image} alt={expert.name} />
                  <ExpertFullInfo>
                    <ExpertFullName>
                      {expert.name} {expert.country}
                    </ExpertFullName>
                    <ExpertDetails>
                      <div>{expert.experience}</div>
                      <div>{expert.sessions}</div>
                    </ExpertDetails>
                  </ExpertFullInfo>
                </ExpertFullCard>
              ))}
            </ExpertCardsContainer>
            <FilterContainer>
              <FilterButton>
                Trending
              </FilterButton>
              <FilterButton>
                Top
              </FilterButton>
            </FilterContainer>
          </>
        ) : (
          <>
            <PopupHeader>
              <div>
                <h2>Talk to our Expert</h2>
                <span>Stylist/Designer</span>
              </div>
              <CloseButton onClick={onClose}>
                <CloseIcon style={{ width: '20px', height: '20px' }} />
              </CloseButton>
            </PopupHeader>

            <TabContainer>
              <PopupTab active>PICK NOW</PopupTab>
              <PopupTab>CHAT NOW</PopupTab>
            </TabContainer>

            <PopupMessage>
              <img src={toolsIcon} alt="Tools" style={{ width: '24px', height: '24px' }} />
              Got stuck? Don't worry! Choose a top designer and let them help you.
            </PopupMessage>

            <ExpertsGrid>
              <ExpertCard>
                <ExpertLabel>TOP STYLIST</ExpertLabel>
                <ExpertImage src={topStylistImage} alt="Stella McCartney" />
                <ExpertName>Stella McCartney</ExpertName>
              </ExpertCard>
              <ExpertCard>
                <ExpertLabel>TOP DESIGNER</ExpertLabel>
                <ExpertImage src={topDesignerImage} alt="Manish Malhotra" />
                <ExpertName>Manish Malhotra</ExpertName>
              </ExpertCard>
            </ExpertsGrid>

            <ExploreButton onClick={() => setIsFullScreen(true)}>
              Explore more
            </ExploreButton>
          </>
        )}
      </PopupContent>
    </PopupOverlay>
  );
};

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onClose, image, onExplore }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay isOpen={isOpen}>
      <PopupContent isOpen={isOpen}>
        <PopupHeader>
          <div>
            <h2>Talk to our Expert</h2>
            <span>Stylist/Designer</span>
          </div>
          <CloseButton onClick={onClose}>
            <CloseIcon style={{ width: '20px', height: '20px' }} />
          </CloseButton>
        </PopupHeader>

        <TabContainer>
          <PopupTab active>PICK NOW</PopupTab>
          <PopupTab>CHAT NOW</PopupTab>
        </TabContainer>

        <PopupMessage>
          <img src={toolsIcon} alt="Tools" style={{ width: '24px', height: '24px' }} />
          Got stuck? Don't worry! Choose a top designer and let them help you.
        </PopupMessage>

        <ExpertsGrid>
          <ExpertCard>
            <ExpertLabel>TOP STYLIST</ExpertLabel>
            <ExpertImage src={topStylistImage} alt="Stella McCartney" />
            <ExpertName>Stella McCartney</ExpertName>
          </ExpertCard>
          <ExpertCard>
            <ExpertLabel>TOP DESIGNER</ExpertLabel>
            <ExpertImage src={topDesignerImage} alt="Manish Malhotra" />
            <ExpertName>Manish Malhotra</ExpertName>
          </ExpertCard>
        </ExpertsGrid>

        <ExploreButton onClick={onExplore}>
          Explore more
        </ExploreButton>
      </PopupContent>
    </PopupOverlay>
  );
};

const LookDetailAlt: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('accessories');
  const [selectedTool, setSelectedTool] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StyleOption | null>(null);
  const [isExpertPopupOpen, setIsExpertPopupOpen] = useState(false);
  const [isFullScreenMode, setIsFullScreenMode] = useState(false);

  const tools = [
    { id: 'crop', icon: CropIcon, label: 'Crop' },
    { id: 'adjust', icon: TuneIcon, label: 'Adjust' },
    { id: 'grid', icon: GridOnIcon, label: 'Grid' },
    { id: 'ruler', icon: StraightenIcon, label: 'Measure' },
    { id: 'wallet', icon: AccountBalanceWalletIcon, label: 'Price' },
    { id: 'close', icon: CloseIcon, label: 'Close' }
  ];

  const styleOptions: StyleOption[] = [
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
    }
  ];

  return (
    <PageContainer>
      <Header>
        <Logo src={areta360Logo} alt="Areta360" onClick={() => navigate('/')} />
        <CartButton>
          <img src={cartIcon} alt="Cart" />
        </CartButton>
      </Header>

      <MainContent>
        <MainImageSection>
          <StarButton>
            <img src={starIcon} alt="Star" />
          </StarButton>
          <MainImage src={whiteModelImage} alt="Look" />
          <ImageCounter>Look | 1/4</ImageCounter>
        </MainImageSection>

          <ToolsBar>
          <ToolsLabel>Tools</ToolsLabel>
          <ToolsList>
            {tools.map((tool) => (
              <ToolButton
                key={tool.id}
                active={selectedTool === tool.id}
                onClick={() => setSelectedTool(tool.id)}
              >
                <tool.icon style={{ 
                  width: '20px', 
                  height: '20px',
                  color: selectedTool === tool.id ? '#000' : '#fff'
                }} />
              </ToolButton>
            ))}
          </ToolsList>
        </ToolsBar>

        <RightPanel>
          <Title>
            <ToolsIcon src={toolsIcon} alt="Tools" />
                Choose and apply
          </Title>
          
          <TabBar>
            <TabButton 
              active={activeTab === 'accessories'}
              onClick={() => setActiveTab('accessories')}
            >
              <img src={bagIcon} alt="Accessories" />
              <span>Accessories</span>
            </TabButton>
            <TabButton 
              active={activeTab === 'tools'}
              onClick={() => setActiveTab('tools')}
            >
              <img src={toolsIcon} alt="Tools" />
              <span>Tools</span>
            </TabButton>
          </TabBar>

          <CategoryBar>
            <CategoryButton>
              <img src={collarIcon} alt="Collar" />
              <span>Collar</span>
                </CategoryButton>
            <CategoryButton>
              <img src={stylesIcon} alt="Styles" />
              <span>Styles</span>
                </CategoryButton>
            <CategoryButton>
              <img src={pantIcon} alt="Pant" />
              <span>Pant</span>
                </CategoryButton>
            <CategoryButton>
              <img src={coatIcon} alt="Coat" />
              <span>Coat</span>
                </CategoryButton>
          </CategoryBar>

          <StyleGrid>
            {styleOptions.map((style) => (
              <StyleCard key={style.id} onClick={() => setSelectedImage(style)}>
                <StyleImage src={style.image} alt={style.name} />
                <HeartButton onClick={(e) => {
                  e.stopPropagation();
                  // Add heart functionality here
                }}>
                  <img src={heartIcon} alt="Heart" />
                </HeartButton>
                <StyleInfo>
                  <StyleName>{style.name}</StyleName>
                  <StyleCategory>{style.category}</StyleCategory>
                </StyleInfo>
              </StyleCard>
            ))}
          </StyleGrid>
        </RightPanel>
      </MainContent>

      {selectedImage && (
        <ImagePopup
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
          onExplore={() => {
            setIsExpertPopupOpen(true);
            setSelectedImage(null);
          }}
        />
      )}

      <ExpertPopup
        isOpen={isExpertPopupOpen}
        onClose={() => setIsExpertPopupOpen(false)}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: #121212 url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Header = styled.header`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const CartButton = styled(IconButton)`
  color: white !important;
  img {
    width: 24px;
    height: 24px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 24px;
  position: relative;
  height: calc(100vh - 100px);
  align-items: center;
`;

const MainImageSection = styled.div`
  width: 50%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(30, 30, 30, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 32px;
  max-height: calc(100vh - 120px);
`;

const StarButton = styled(IconButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(8px);
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-size: 14px;
  backdrop-filter: blur(8px);
`;

const ToolsBar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: rgba(18, 18, 18, 0.95);
  padding: 16px;
  border-radius: 16px;
  backdrop-filter: blur(8px);
  z-index: 10;
`;

const ToolsLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
`;

const ToolsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface ToolButtonProps {
  active?: boolean;
}

const ToolButton = styled.button<ToolButtonProps>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const RightPanel = styled.div`
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 500;
`;

const ToolsIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const TabBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

interface TabButtonProps {
  active?: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  font-size: 16px;
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.active ? 'white' : 'transparent'};
  }

  &:hover {
    color: white;
  }
`;

const CategoryBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const StyleCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1E1E1E;
  cursor: pointer;
`;

const StyleImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const HeartButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(8px);
  
  img {
    width: 16px;
    height: 16px;
  }
`;

const StyleInfo = styled.div`
  padding: 12px;
`;

const StyleName = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const StyleCategory = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const PopupOverlay = styled.div<PopupOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: ${props => props.isFullScreen ? 'center' : 'stretch'};
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const PopupContent = styled.div<PopupContentProps>`
  background: ${props => props.isFullScreen ? 'transparent' : 'rgba(40, 40, 40, 0.95)'};
  width: ${props => props.isFullScreen ? '90%' : '450px'};
  height: ${props => props.isFullScreen ? '90%' : '100%'};
  margin: ${props => props.isFullScreen ? '0 auto' : '0 0 0 auto'};
  border-radius: ${props => props.isFullScreen ? '16px' : '0'};
  padding: ${props => props.isFullScreen ? '0' : '24px'};
  color: white;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease, width 0.3s ease;
  overflow-y: ${props => props.isFullScreen ? 'hidden' : 'auto'};
  position: relative;
  backdrop-filter: ${props => props.isFullScreen ? 'none' : 'blur(10px)'};
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  h2 {
    font-size: 24px;
    margin: 0 0 8px;
    font-weight: 500;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(${toolsIcon}) no-repeat center;
      background-size: contain;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

interface PopupTabProps {
  active?: boolean;
}

const PopupTab = styled.button<PopupTabProps>`
  background: none;
  border: none;
  color: ${props => props.active ? '#FFD700' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 14px;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 2px solid ${props => props.active ? '#FFD700' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.active ? '#FFD700' : 'white'};
  }
`;

const PopupMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  font-size: 14px;
`;

const ExpertsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
`;

const ExpertCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ExpertLabel = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: white;
  color: black;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  z-index: 1;
`;

const ExpertImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ExpertName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ExploreButton = styled.button`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 24px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const FullScreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
`;

const HelpButton = styled(IconButton)`
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  padding: 8px 16px !important;
  color: white !important;
  font-size: 14px !important;
  text-transform: none !important;
  
  .MuiSvgIcon-root {
    margin-right: 4px;
  }
`;

const LanguageButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
`;

const ExpertCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px;
  max-height: calc(90vh - 200px);
  overflow-y: auto;
  background: rgba(26, 26, 26, 0.95);
  border-radius: 0 0 16px 16px;
`;

const ExpertFullCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const AvailableTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: #FFD700;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 1;
`;

const ExpertFullImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const ExpertFullInfo = styled.div`
  padding: 16px;
  background: rgba(26, 26, 26, 0.95);
`;

const ExpertFullName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ExpertDetails = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  
  > div {
    margin-bottom: 4px;
  }
`;

const FilterContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
  display: flex;
  gap: 12px;
  z-index: 2;
`;

const FilterButton = styled.button`
  background: rgba(26, 26, 26, 0.95);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 8px 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledPopupImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin: 16px 0;
`;

export default LookDetailAlt; 