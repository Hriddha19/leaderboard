// api/svg.js
export default function handler(req, res) {
  const svg = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="#4299e1"/>
    <text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">
      SVG Test Working!
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
