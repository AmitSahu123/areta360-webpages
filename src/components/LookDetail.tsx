import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

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

interface StyleOption {
  id: number;
  image: string;
  name: string;
  category: string;
}

const LookDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('accessories');

  const sizes = ['M', 'L', 'XL', 'XXL', '3XL'];

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
    },
    {
      id: 5,
      image: '/assets/images/style5.png',
      name: 'Summer Style',
      category: 'Summer'
    },
    {
      id: 6,
      image: '/assets/images/style6.png',
      name: 'Casual Look',
      category: 'Summer'
    }
  ];

  const handleStarClick = () => {
    navigate(`/look-alt/${id || '1'}`);
  };

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
          <StarButton onClick={handleStarClick}>
            <img src={starIcon} alt="Star" />
          </StarButton>
          <MainImage src={whiteModelImage} alt="Look" />
          <ImageCounter>Look | 1/4</ImageCounter>
        </MainImageSection>

        <SizeBarContainer>
          <SizeLabel>Size: {selectedSize}</SizeLabel>
          <SizeButtons>
                {sizes.map((size) => (
                  <SizeButton
                    key={size}
                active={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </SizeButton>
                ))}
          </SizeButtons>
        </SizeBarContainer>

        <ToolsSection>
          <Title>
            <ToolsIcon src={toolsIcon} alt="Tools" />
            Choose and apply
          </Title>
          
          <ToolsBar>
            <ToolButton 
              active={activeTab === 'accessories'}
              onClick={() => setActiveTab('accessories')}
            >
              <img src={bagIcon} alt="Accessories" />
              <span>Accessories</span>
            </ToolButton>
            <ToolButton 
              active={activeTab === 'tools'}
              onClick={() => setActiveTab('tools')}
            >
              <img src={toolsIcon} alt="Tools" />
              <span>Tools</span>
            </ToolButton>
          </ToolsBar>

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
                  <StyleCard key={style.id}>
                <StyleImage src={style.image} alt={style.name} />
                <HeartButton>
                  <img src={heartIcon} alt="Heart" />
                </HeartButton>
                <StyleInfo>
                  <StyleName>{style.name}</StyleName>
                  <StyleCategory>{style.category}</StyleCategory>
                </StyleInfo>
                  </StyleCard>
                ))}
          </StyleGrid>
        </ToolsSection>
      </MainContent>
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

const SizeBarContainer = styled.div`
  position: absolute;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(18, 18, 18, 0.95);
  padding: 24px 16px;
  border-radius: 16px;
  backdrop-filter: blur(8px);
  z-index: 10;
`;

const SizeLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
  text-align: center;
`;

const SizeButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

interface SizeButtonProps {
  active: boolean;
}

const SizeButton = styled.button<SizeButtonProps>`
  width: 44px;
  height: 44px;
  border: ${props => props.active ? 'none' : '2px dashed rgba(255, 255, 255, 0.3)'};
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#121212' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:not(:disabled) {
    opacity: ${props => props.active ? 1 : 0.7};
  }

  &:hover:not(:disabled):not(:active) {
    opacity: 1;
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const ToolsSection = styled.div`
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

const ToolsBar = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

interface ToolButtonProps {
  active?: boolean;
}

const ToolButton = styled.button<ToolButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  border: none;
  border-radius: 8px;
  color: ${props => props.active ? 'black' : 'white'};
  cursor: pointer;
  transition: all 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
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

export default LookDetail; 