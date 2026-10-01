const html = `<!DOCTYPE html><html><head><title>Terms of Service</title></head><body><h1>Terms of Service — Personal OpenClaw Integration</h1><p>This application is a personal automation tool used solely by its account owner to connect their own Google account to a personal AI assistant.</p><ul><li>Provided as-is, for personal use only, with no warranty of any kind.</li><li>The owner may modify, suspend, or discontinue this integration at any time.</li><li>No fees are charged and no commercial service is offered to any other party.</li><li>Access can be revoked at any time via Google Account → Security → Third-party access.</li></ul></body></html>`

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
