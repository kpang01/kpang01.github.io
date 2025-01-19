import React, { useEffect, useState } from 'react';

function AIVisual() {
  const [activeNode, setActiveNode] = useState(null);
  const [activePath, setActivePath] = useState(null);
  const [networkPulse, setNetworkPulse] = useState(false);
  
  // Layer configuration
  const layers = [
    { nodes: 4, label: 'Input' },
    { nodes: 6, label: 'Hidden 1' },
    { nodes: 6, label: 'Hidden 2' },
    { nodes: 4, label: 'Output' }
  ];

  // Calculate positions
  const width = 600;
  const height = 600;
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
            weight: Math.random() * 2 - 1
          });
        });
      });
    }
    return connections;
  };

  // Network pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkPulse(true);
      setTimeout(() => setNetworkPulse(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNodeHover = (index) => {
    setActiveNode(index);
    setActivePath(index);
  };

  return (
    <div style={{
      position: 'relative',
      width: width,
      height: height,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute' }}>
        {/* Connections */}
        {getConnections().map((connection, i) => {
          const isActive = activePath === connection.start.nodeIndex || 
                          activePath === connection.end.nodeIndex;
          return (
            <g key={`connection-${i}`}>
              <line
                x1={connection.start.x}
                y1={connection.start.y}
                x2={connection.end.x}
                y2={connection.end.y}
                stroke="#38BDF8"
                strokeWidth={isActive ? "2" : "1"}
                strokeOpacity={isActive ? "0.4" : "0.2"}
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Data flow particles */}
              <circle r="2" fill="#38BDF8">
                <animateMotion
                  dur={`${3 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  path={`M${connection.start.x},${connection.start.y} L${connection.end.x},${connection.end.y}`}
                />
              </circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodePositions.map((node, i) => {
          const isActive = activeNode === i;
          return (
            <g key={`node-${i}`}
               onMouseEnter={() => handleNodeHover(i)}
               onMouseLeave={() => {
                 setActiveNode(null);
                 setActivePath(null);
               }}
               style={{ cursor: 'pointer' }}
            >
              {/* Activation ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="none"
                stroke={isActive ? "#60A5FA" : "#38BDF8"}
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray={isActive ? "4,2" : "0"}
                style={{ transition: 'all 0.3s ease' }}
              >
                <animate
                  attributeName="r"
                  values={networkPulse ? "20;25;20" : "20"}
                  dur="1s"
                  repeatCount="1"
                />
              </circle>

              {/* Outer glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r="15"
                fill="rgba(56, 189, 248, 0.1)"
                filter="url(#glow)"
                style={{ transition: 'all 0.3s ease' }}
              >
                <animate
                  attributeName="r"
                  values={isActive ? "15;18;15" : "12;15;12"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? "8" : "6"}
                fill={isActive ? "#60A5FA" : "#38BDF8"}
                style={{ transition: 'all 0.3s ease' }}
              />

              {/* Activation value */}
              {isActive && (
                <text
                  x={node.x}
                  y={node.y - 25}
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="12"
                >
                  {node.activation.toFixed(2)}
                </text>
              )}
            </g>
          );
        })}

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
      </svg>

      {/* Layer Labels */}
      {layers.map((layer, i) => (
        <div
          key={`label-${i}`}
          style={{
            position: 'absolute',
            top: height - 40,
            left: layerGap * (i + 1) - 30,
            color: '#94A3B8',
            fontSize: '14px',
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