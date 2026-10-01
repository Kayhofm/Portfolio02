const html = `<!DOCTYPE html><html><head><title>OpenClaw Calendar</title></head><body><h1>OpenClaw Calendar</h1><p>OpenClaw Calendar is a personal automation integration used solely by its owner (Kay Hofmeester) to connect their own Google account to a personal AI assistant for calendar and email management.</p><p>See the <a href="/privacy-policy">privacy policy</a> and <a href="/terms-of-service">terms of service</a>.</p></body></html>`

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
