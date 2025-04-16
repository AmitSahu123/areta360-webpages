import React, { useState } from 'react';
import { Tabs, Tab, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CollectionCard from './CollectionCard';

// Import assets
import areta360Logo from '../assets/images/areta360.png';
import cartIcon from '../assets/icon/cart-icon.png';
import notificationIcon from '../assets/icon/notification (1).png';
import historyIcon from '../assets/icon/history-icon.png';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import style1 from '../assets/images/style1.png';
import style2 from '../assets/images/style2.png';
import style3 from '../assets/images/style3.png';
import style4 from '../assets/images/style4.png';
import style5 from '../assets/images/style5.png';
import style6 from '../assets/images/style6.png';

interface Collection {
  id: number;
  image: any;
  category: string;
}

const Collections: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const collections: Collection[] = [
    {
      id: 1,
      image: image1,
      category: 'Casual'
    },
    {
      id: 2,
      image: image2,
      category: 'Casual'
    },
    {
      id: 3,
      image: image3,
      category: 'Casual'
    },
    {
      id: 4,
      image: image4,
      category: 'Casual'
    },
    {
      id: 5,
      image: image5,
      category: 'Casual'
    },
    {
      id: 6,
      image: image6,
      category: 'Casual'
    },
    {
      id: 7,
      image: image7,
      category: 'Casual'
    },
    {
      id: 8,
      image: image8,
      category: 'Casual'
    },
    {
      id: 9,
      image: style1,
      category: 'Formal'
    },
    {
      id: 10,
      image: style2,
      category: 'Formal'
    },
    {
      id: 11,
      image: style3,
      category: 'Formal'
    },
    {
      id: 12,
      image: style4,
      category: 'Formal'
    },
    {
      id: 13,
      image: style5,
      category: 'Formal'
    },
    {
      id: 14,
      image: style6,
      category: 'Formal'
    }
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleCollectionClick = (collection: Collection) => {
    navigate(`/look/${collection.id}`);
  };

  const filteredCollections = () => {
    switch (activeTab) {
      case 0: // YOURS
        return collections.filter(c => c.id <= 8); // Show numbered images
      case 1: // TRENDING
        return collections.filter(c => c.id > 8); // Show style images
      case 2: // ALL COLLECTIONS
        return collections;
      default:
        return collections;
    }
  };

  return (
    <PageContainer>
      <Header>
        <LogoContainer>
          <Logo src={areta360Logo} alt="Areta360" onClick={() => navigate('/')} />
          <Title>Collections</Title>
        </LogoContainer>
        <IconsContainer>
          <IconButton>
            <img src={cartIcon} alt="Cart" />
          </IconButton>
          <IconButton>
            <img src={notificationIcon} alt="Notifications" />
          </IconButton>
          <IconButton>
            <img src={historyIcon} alt="History" />
          </IconButton>
        </IconsContainer>
      </Header>
      <TabsContainer>
        <CustomTabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="standard"
        >
          <CustomTab label="YOURS" />
          <CustomTab label="TRENDING" />
          <CustomTab label="ALL COLLECTIONS" />
        </CustomTabs>
      </TabsContainer>
      <CollectionsGrid>
        {filteredCollections().map((collection) => (
          <CollectionCard
            key={collection.id}
            image={collection.image}
            category={collection.category}
            onClick={() => handleCollectionClick(collection)}
          />
        ))}
      </CollectionsGrid>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
`;

const Header = styled.header`
  padding: 16px 24px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 8px;

  .MuiIconButton-root {
    color: white;
    padding: 8px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const TabsContainer = styled.div`
  margin: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CustomTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: white;
  }
`;

const CustomTab = styled(Tab)`
  color: rgba(255, 255, 255, 0.7) !important;
  padding: 12px 24px !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;

  &.Mui-selected {
    color: white !important;
  }
`;

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
`;

export default Collections; 