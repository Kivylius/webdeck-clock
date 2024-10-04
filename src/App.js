import React from "react";

export const init = ({ drawKey, config }) => {
  console.log("webdeck-screensaver inited", drawKey, config);
  const interval = setInterval(() => {
    drawKey(({ ctx, canvas }) => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set the size of the clock to fit within a square
      const radius = (Math.min(canvas.width, canvas.height) / 2) * 1;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw clock numbers
      ctx.font = `${radius * 0.25}px Arial`;
      ctx.fillStyle = "white"; // White numbers
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let num = 1; num <= 12; num++) {
        const angle = (num * Math.PI) / 6;
        const x = centerX + Math.cos(angle - Math.PI / 2) * radius * 0.75;
        const y = centerY + Math.sin(angle - Math.PI / 2) * radius * 0.75;
        ctx.fillText(num.toString(), x, y);
      }

      // Get the current time
      const now = new Date();
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const second = now.getSeconds();

      // Calculate angles for each hand
      const hourAngle = ((hour + minute / 60) * Math.PI) / 6;
      const minuteAngle = ((minute + second / 60) * Math.PI) / 30;
      const secondAngle = (second * Math.PI) / 30;

      // Draw hour hand (white)
      drawHand(ctx, centerX, centerY, hourAngle, radius * 0.5, 3, "white");

      // Draw minute hand (white)
      drawHand(ctx, centerX, centerY, minuteAngle, radius * 0.7, 2, "gray");

      // Draw second hand (thin red)
      drawHand(ctx, centerX, centerY, secondAngle, radius * 0.8, 1, "red");
    });
  }, 100);

  function drawHand(
    ctx,
    centerX,
    centerY,
    angle,
    length,
    width,
    color = "black"
  ) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + Math.cos(angle - Math.PI / 2) * length,
      centerY + Math.sin(angle - Math.PI / 2) * length
    );
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }

  return () => {
    clearInterval(interval);
  };
};

export const manifest = {
  version: 1,
  bespoke: true,
};

const App = (props) => {
  console.log("App render", { props });
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <div>hello from webdeck-plugin-template</div>
    </div>
  );
};

export default App;
