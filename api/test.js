// api/test.js
export default function handler(req, res) {
  const { type = 'goals', data = 'Test+10+User+5' } = req.query;
  
  if (req.query.image === 'true') {
    // Very simple SVG test
    const svg = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="blue"/>
      <text x="200" y="100" font-family="Arial" font-size="20" fill="white" text-anchor="middle">
        Hello World - ${type}
      </text>
    </svg>`;
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(svg);
    return;
  }
  
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Test route is working! Add ?image=true for SVG test');
}
