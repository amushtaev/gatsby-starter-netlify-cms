import React, { useState } from 'react'
import { AccordionContext } from './AccordionContext'
import styled, { keyframes } from 'styled-components'
import { TriangleDownIcon, TriangleUpIcon } from '../img/icons'

function getAccordionPanelBackground(transparent, background) {
  if (transparent !== undefined && transparent) {
    return 'transparent'
  }
  if (background) {
    return background
  }
  return 'transparent'
}

function getPanelLabelColor(active, color, activeColor) {
  if (active && activeColor !== undefined) {
    return activeColor
  }
  if (color !== undefined) {
    return color
  }
  return '#fff'
}

const AccordionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  outline: none;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s;
  background: ${(props) =>
    getAccordionPanelBackground(props.transparent, props.background)};
  color: ${(props) =>
    getPanelLabelColor(props.active, props.color, props.activeColor)};
  opacity: ${(props) => {
    return props.active ? '1' : props.hover ? '1' : '0.6'
  }};
`;

const Collapsible = styled.div`
  height: ${(props) => (props.open ? '100%' : '0')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  overflow: ${(props) => (props.open ? 'visible' : 'hidden')};
  padding: ${(props) => (props.open ? '24px 0 24px 0' : '0')};
  transition: all 0.3s;
`;

export const openContent = keyframes`
  0% {
    height: 1%;
  }
  100% {
    height: 100%;
  }
`;

export const closeContent = keyframes`
  0% {
    height: 100%;
  }
  100% {
    height: 1%;
  }
`;

const CountLabel = styled.span`
  margin: 0 8px 0 8px;
  color: #fff;
  opacity: ${(props) => (props.highlighted ? '0.6' : '0.2')};
  transition: all 0.3s;
`;

const AccordionPanel = (props) => {
  const {
    className,
    label,
    icon,
    children,
    innerItemsCount,
    color,
    activeColor,
  } = props;
  const [hover, setHover] = useState(false);
  const buttonRef = React.createRef();
  const { active, animate, gap, onPanelChange } = React.useContext(
    AccordionContext
  );

  return (
    <div style={{ marginBottom: gap }}>
      <AccordionButton
        ref={buttonRef}
        className={className}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          onPanelChange()
        }}
        hover={hover}
        active={active}
        activeColor={activeColor}
        color={color}
      >
        {icon && <div style={{ margin: '0 5px 0 0' }}>{icon}</div>}
        {typeof label === 'string' ? <span>{label}</span> : label}
        {innerItemsCount !== undefined && innerItemsCount > 0 && (
          <CountLabel highlighted={hover || active}>
            ({innerItemsCount})
          </CountLabel>
        )}
        <div style={{ marginLeft: '5px', display: 'inline-block' }}>
          {active ? (
            <TriangleUpIcon
              fill={
                // eslint-disable-next-line no-nested-ternary
                active && activeColor
                  ? activeColor
                  : color !== undefined
                  ? color
                  : '#fff'
              }
              height={12}
              width={12}
              fillOpacity={hover || active ? '1' : '0.6'}
            />
          ) : (
            <TriangleDownIcon
              fill="#fff"
              height={12}
              width={12}
              fillOpacity={hover || active ? '1' : '0.6'}
            />
          )}
        </div>
      </AccordionButton>
      <div style={{ overflow: 'visible' }}>
        {animate ? (
          <Collapsible open={active}>{children}</Collapsible>
        ) : (
          active && children
        )}
      </div>
    </div>
  )
};

export default AccordionPanel
