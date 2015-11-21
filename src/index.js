import React from 'react';

const Thermometer = ({min, max, current, fillColor, backgroundColor, height, width}) => {
  const totalHeight = height + (width * 2.5);
  const bubbleHeight = width * 2.5;
  const unitOfMovement = totalHeight / (max - min);
  const percentageFilled = current / (max - min);
  const pixelsToFill = totalHeight * percentageFilled;
  let bubblePixelsToFill;
  let restPixelsToFill;
  if (pixelsToFill < bubbleHeight) {
    bubblePixelsToFill = pixelsToFill;
    restPixelsToFill = 0;
  }
  else {
    bubblePixelsToFill = bubbleHeight;
    restPixelsToFill = pixelsToFill - bubblePixelsToFill;
  }
  const marginLeft = ((width - 20) / 10) * 7.5;
  const style = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
    borderRadius: '100px 100px 0 0',
    padding: 1,
    marginLeft: marginLeft,
    position: 'relative'
  };

  const fillStyle = {
    backgroundColor: fillColor,
    borderRadius: 100,
    width: width,
    position: 'absolute',
    bottom: 5,
    zIndex: 3,
    height: restPixelsToFill
  };

  const bubbleStyle = {
    backgroundColor: backgroundColor,
    borderRadius: 100,
    height: width * 2.5,
    width: width * 2.5,
    padding: 1,
    position: 'relative',
    top: -width,
    right: 15,
    zIndex: 1
  }

  let bubbleBorderRadius;
  const unitsOfMovementToCenter = Math.floor((bubbleHeight / 2) / unitOfMovement);
  const startingWidth = bubbleHeight * 0.4;
  const widthIncreasePerMovement = (bubbleHeight - startingWidth) / unitsOfMovementToCenter; 
  const bubbleFillWidth = current >= unitsOfMovementToCenter ? width * 2.5 : 
    current * widthIncreasePerMovement + startingWidth;
  const bubbleFillMarginLeft = (bubbleHeight - bubbleFillWidth) / 2;
  const shouldUseCompleteBorderRadius = (bubblePixelsToFill / bubbleHeight) >= 0.8;
  if (shouldUseCompleteBorderRadius) {
    bubbleBorderRadius = 100;
  }
  else {
    bubbleBorderRadius = '0 0 100px 100px';
  }
  const bubbleFill = {
    backgroundColor: fillColor,
    borderRadius: bubbleBorderRadius,
    height: bubblePixelsToFill,
    marginTop: bubbleHeight - bubblePixelsToFill,
    marginLeft: bubbleFillMarginLeft,
    width: bubbleFillWidth,
    zIndex: 2
  }
  return (
    <div>
      <div style={style}>
          <div style={fillStyle}></div>
      </div>
      <div style={bubbleStyle}>
          <div style={bubbleFill}></div>
      </div>
    </div>
  );
};

export default Thermometer;