import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface Stylist {
  id: number;
  name: string;
  country: string;
  experience: string;
  rating: number;
  reviews: number;
  image: string;
  available: boolean;
}

const StylistList: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const stylists: Stylist[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      experience: "5 years",
      rating: 4.8,
      reviews: 127,
      image: "/images/stylist1.jpg",
      available: true
    },
    {
      id: 2,
      name: "Emma Wilson",
      country: "United Kingdom",
      experience: "3 years",
      rating: 4.6,
      reviews: 89,
      image: "/images/stylist2.jpg",
      available: true
    },
    {
      id: 3,
      name: "Maria Garcia",
      country: "Spain",
      experience: "7 years",
      rating: 4.9,
      reviews: 156,
      image: "/images/stylist3.jpg",
      available: false
    }
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <img src="/icon/back.png" alt="Back" />
        </BackButton>
        <Typography variant="h6">Choose Your Stylist</Typography>
        <div style={{ width: 40 }} />
      </Header>

      <TabsContainer>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="All" />
          <Tab label="Available Now" />
          <Tab label="Top Rated" />
        </Tabs>
      </TabsContainer>

      <StylistGrid>
        {stylists.map((stylist) => (
          <StylistCard key={stylist.id}>
            <StylistImage src={stylist.image} alt={stylist.name} />
            <StylistInfo>
              <Typography variant="h6">{stylist.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {stylist.country} • {stylist.experience}
              </Typography>
              <RatingContainer>
                <img src="/icon/star.png" alt="Rating" />
                <Typography variant="body2">
                  {stylist.rating} ({stylist.reviews} reviews)
                </Typography>
              </RatingContainer>
              <AvailabilityBadge available={stylist.available}>
                {stylist.available ? 'Available Now' : 'Not Available'}
              </AvailabilityBadge>
            </StylistInfo>
          </StylistCard>
        ))}
      </StylistGrid>

      <BottomBar>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </BottomBar>
    </PageContainer>
  );
};

const PageContainer = styled(Box)`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 16px;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const BackButton = styled(Button)`
  min-width: 40px;
  padding: 8px;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

const TabsContainer = styled(Box)`
  margin-bottom: 24px;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;

const StylistGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 80px;
`;

const StylistCard = styled(Box)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StylistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StylistInfo = styled(Box)`
  padding: 16px;
`;

const RatingContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  img {
    width: 16px;
    height: 16px;
  }
`;

const AvailabilityBadge = styled(Box)<{ available: boolean }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => props.available ? '#4caf50' : '#f44336'};
  color: white;
  font-size: 0.875rem;
`;

const BottomBar = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export default StylistList; 