import React from 'react';
import styled from '@emotion/styled';

interface CollectionCardProps {
  image: any;
  category: string;
  onClick: () => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ image, category, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={image} alt={category} />
      <Overlay>
        <CategoryBadge>{category}</CategoryBadge>
      </Overlay>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  aspect-ratio: 1;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
`;

const CategoryBadge = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export default CollectionCard; 