import React from "react";

interface ProgressBarProps {
  percentage: number; // The progress percentage (0 to 100)
  height?: string; // Height of the progress bar (optional)
  color?: string; // Color of the progress bar (optional)
  className?: string; // Additional classes for styling (optional)
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  height = "8px",
  color = "#4caf50", // Default color (green)
  className = "",
}) => {
  // Ensure the percentage is between 0 and 100
  const progress = Math.min(Math.max(percentage, 0), 100);

  return (
    <div
      className={`w-full bg-gray-200 rounded-full ${className}`}
      style={{ height }}
    >
      <div
        className="bg-primary rounded-full"
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: color, // Set dynamic color
          transition: "width 0.3s ease-in-out", // Smooth transition
        }}
      />
    </div>
  );
};

export default ProgressBar;
