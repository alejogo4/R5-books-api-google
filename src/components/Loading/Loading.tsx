import React from 'react';
import ContentLoader from 'react-content-loader';

interface LoadingProps {
  rows: number;
  columns: number;
  width: number;
  height: number;
  padding: number;
  speed?: number;
  backgroundColor?: string;
  foregroundColor?: string;
}

const Loading: React.FC<LoadingProps> = ({
  rows,
  columns,
  width,
  height,
  padding,
  speed = 2,
  backgroundColor = '#f3f3f3',
  foregroundColor = '#ecebeb'
}) => {
  const loaderItems = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const xOffset = col * (width + padding);
      const yOffset = row * (height + padding);

      loaderItems.push(
        <rect key={`rect-${row}-${col}`} x={xOffset} y={yOffset} rx='5' ry='5' width={width} height={height} />
      );
    }
  }

  return (
    <ContentLoader
      speed={speed}
      width={(width + padding) * columns}
      height={(height + padding) * rows}
      viewBox={`0 0 ${(width + padding) * columns} ${(height + padding) * rows}`}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      {loaderItems}
    </ContentLoader>
  );
};

export default Loading;
