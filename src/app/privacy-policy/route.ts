const html = `<!DOCTYPE html><html><head><title>Privacy Policy</title></head><body><h1>Privacy Policy — Personal OpenClaw Integration</h1><p>This application is a personal, single-user automation integration connecting one individual's own Google account (Gmail, Calendar, Drive, Docs, Sheets, Slides) to a personal AI assistant running on infrastructure the account owner controls.</p><ul><li>This app is used by its owner only. It is not distributed to, or intended for use by, any other individual or organization.</li><li>Data accessed (email, calendar events, files) is used solely to perform tasks requested directly by the account owner and is not shared with, sold to, or used to train models for any third party.</li><li>No data collected through this integration is used for advertising.</li><li>Access can be revoked at any time by the account owner via Google Account → Security → Third-party access.</li></ul></body></html>`

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
