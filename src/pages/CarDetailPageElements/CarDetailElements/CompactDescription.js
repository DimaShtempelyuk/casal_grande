import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaTruck, FaUserFriends, FaWeightHanging } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

const CompactDescription = ({ car }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // useMeasure to get the height of the full description
  const [ref, { height: viewHeight }] = useMeasure();

  // Animation for the expand/collapse
  const expandAnimation = useSpring({
    height: isExpanded ? viewHeight : 0,
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    config: { tension: 250, friction: 20 },
  });

  const icons = [<FaTruck />, <FaUserFriends />, <FaWeightHanging />];

  return (
    <DescriptionContainer>
      <Title>{car.name}</Title>
      <SpecsList>
        {car.specs.slice(0, 3).map((spec, index) => (
          <SpecItem key={index}>
            <IconContainer>{icons[index]}</IconContainer>
            <SpecContent>
              <SpecTitle>{spec.title}:</SpecTitle>
              <SpecValue>{spec.value}</SpecValue>
            </SpecContent>
          </SpecItem>
        ))}
      </SpecsList>

      {/* Animated section for full description */}
      <AnimatedFullDescription style={expandAnimation}>
        <div ref={ref}>
          <p>{car.description}</p>
          <FullSpecsList>
            {car.specs.slice(3).map((spec, index) => (
              <SpecItem key={index}>
                <SpecTitle>{spec.title}:</SpecTitle>
                <SpecValue>{spec.value}</SpecValue>
              </SpecItem>
            ))}
          </FullSpecsList>
        </div>
      </AnimatedFullDescription>

      <ExpandButton onClick={toggleExpand}>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </ExpandButton>
    </DescriptionContainer>
  );
};

// Styled components
const DescriptionContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.8s ease;
  max-width: 60dvw;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5em;
`;

const SpecsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FullSpecsList = styled(SpecsList)`
  margin-top: 1.5em;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-size: 1.2em;
`;

const IconContainer = styled.div`
  color: #3085d6;
  font-size: 1.8em;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const SpecContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

const SpecTitle = styled.span`
  font-weight: bold;
  color: #333;
`;

const SpecValue = styled.span`
  color: #666;
  text-align: right;
`;

const AnimatedFullDescription = styled(animated.div)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  color: #333;
  line-height: 1.6;

  p {
    margin-bottom: 1em;
  }
`;

const ExpandButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #3085d6;
  cursor: pointer;
  transition: color 0.3s;
  margin-top: 2dvh;
  &:hover {
    color: #1a6bbf;
  }
`;

export default CompactDescription;
