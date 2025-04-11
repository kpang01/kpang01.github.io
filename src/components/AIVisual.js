import React, { useEffect, useState } from 'react';

function AIVisual() {
  const [activeNode, setActiveNode] = useState(null);
  // const [activePath, setActivePath] = useState(null); // Removed unused state
  const [networkPulse, setNetworkPulse] = useState(false);

  // Layer configuration
  const layers = [
    { nodes: 4, label: 'Input' },
    { nodes: 6, label: 'Hidden 1' },
    { nodes: 6, label: 'Hidden 2' },
    { nodes: 4, label: 'Output' }
  ];

  // Calculate positions
  const width = 600; // Intrinsic width of the SVG visual
  const height = 600; // Intrinsic height of the SVG visual
  const layerGap = width / (layers.length + 1);
  const maxNodes = Math.max(...layers.map(l => l.nodes));
  const nodeGap = height / (maxNodes + 1);

  // Generate node positions with activation values
  const getNodePositions = () => {
    let positions = [];
    layers.forEach((layer, layerIndex) => {
      const x = layerGap * (layerIndex + 1);
      const layerStart = (height - (layer.nodes - 1) * nodeGap) / 2;
      for (let i = 0; i < layer.nodes; i++) {
        positions.push({
          x,
          y: layerStart + i * nodeGap,
          layerIndex,
          nodeIndex: i,
          activation: Math.random()
        });
      }
    });
    return positions;
  };

  // Memoize node positions and connections if performance becomes an issue
  const nodePositions = getNodePositions();

  // Generate connections with weights
  const getConnections = () => {
    let connections = [];
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = nodePositions.filter(node => node.layerIndex === i);
      const nextLayer = nodePositions.filter(node => node.layerIndex === i + 1);

      currentLayer.forEach(start => {
        nextLayer.forEach(end => {
          connections.push({
            start,
            end,
            weight: Math.random() * 2 - 1 // Example weight
          });
        });
      });
    }
    return connections;
  };

  const connections = getConnections(); // Generate connections once

  // Network pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkPulse(true);
      const timer = setTimeout(() => setNetworkPulse(false), 1000);
      return () => clearTimeout(timer); // Clear timeout on interval clear
    }, 5000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleNodeHover = (index) => {
    setActiveNode(index);
    // Highlight paths connected to the hovered node - logic removed as activePath state is removed
    // const connectedPaths = connections.filter(c => c.start === nodePositions[index] || c.end === nodePositions[index]);
    // setActivePath(index); // Removed unused state update
  };

  const handleNodeLeave = () => {
    setActiveNode(null);
    // setActivePath(null); // Removed unused state update
  };


  return (
    // Container div controls the size and positioning within the parent layout
    <div style={{
      position: 'relative', // Changed from absolute if it's placed directly
      width: '100%', // Take width of parent container (.cards-visual)
      height: '100%', // Take height of parent container (.cards-visual)
      maxWidth: `${width}px`, // Max width based on SVG intrinsic size
      maxHeight: `${height}px`, // Max height based on SVG intrinsic size
      margin: 'auto' // Center if needed
    }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Effects definitions */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map((connection, i) => {
          // Determine if path is active based on the activeNode state only
          const isPathActive = activeNode !== null && (connection.start === nodePositions[activeNode] || connection.end === nodePositions[activeNode]);
          return (
            <g key={`connection-${i}`}>
              <line
                x1={connection.start.x}
                y1={connection.start.y}
                x2={connection.end.x}
                y2={connection.end.y}
                stroke="#38BDF8" // Consider using CSS variable --cyan-highlight or --green
                strokeWidth={isPathActive ? "1.5" : "0.5"} // Adjusted thickness
                strokeOpacity={isPathActive ? "0.6" : "0.15"} // Adjusted opacity
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Data flow particles */}
              <circle r="1.5" fill="#38BDF8">
                <animateMotion
                  dur={`${3 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  path={`M${connection.start.x},${connection.start.y} L${connection.end.x},${connection.end.y}`}
                  begin={`${Math.random() * 1}s`} // Stagger particle start times
                />
              </circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodePositions.map((node, i) => {
          const isNodeActive = activeNode === i;
          return (
            <g key={`node-${i}`}
               onMouseEnter={() => handleNodeHover(i)}
               onMouseLeave={handleNodeLeave}
               style={{ cursor: 'pointer' }}
            >
              {/* Activation ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="none"
                stroke={isNodeActive ? "#60A5FA" : "#38BDF8"} // Consider CSS variables
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray={isNodeActive ? "4,2" : "none"} // Use none instead of 0
                style={{ transition: 'all 0.3s ease' }}
              >
                {networkPulse && <animate
                  attributeName="r"
                  values="20;25;20"
                  dur="1s"
                  repeatCount="1" // Removed indefinite repeat
                  begin="0s" // Start immediately when pulse is true
                />}
              </circle>

              {/* Outer glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? "18" : "15"} // Make active glow slightly larger
                fill="rgba(56, 189, 248, 0.1)"
                filter="url(#glow)"
                style={{ transition: 'all 0.3s ease' }}
              >
                 <animate
                  attributeName="r"
                  values={isNodeActive ? "18;22;18" : "15;18;15"} // Adjusted values
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? "8" : "6"}
                fill={isNodeActive ? "#60A5FA" : "#38BDF8"} // Consider CSS variables
                style={{ transition: 'all 0.3s ease' }}
              />

              {/* Activation value */}
              {isNodeActive && (
                <text
                  x={node.x}
                  y={node.y - 25}
                  textAnchor="middle"
                  fill="#94A3B8" // Consider var(--slate)
                  fontSize="12" // Consider var(--fz-xxs)
                  style={{ pointerEvents: 'none' }} // Prevent text from blocking hover
                >
                  {node.activation.toFixed(2)}
                </text>
              )}
            </g>
          );
        })}

      </svg>

      {/* Layer Labels - Positioned relative to the container div */}
       {layers.map((layer, i) => (
        <div
          key={`label-${i}`}
          style={{
            position: 'absolute',
            bottom: '20px', // Position labels at the bottom
            left: `${(layerGap * (i + 1) / width) * 100}%`, // Position based on percentage
            transform: 'translateX(-50%)', // Center the label
            color: '#94A3B8', // Consider var(--slate)
            fontSize: '14px', // Consider var(--fz-sm)
            textAlign: 'center',
          }}
        >
          {layer.label}
        </div>
      ))}
    </div>
  );
}

export default AIVisual;
