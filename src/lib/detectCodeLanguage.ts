/**
 * Heuristically determines the Prism language id for a code snippet.
 * Covers nmap, docker, SQL, HTML payloads, curl, and HTTP paths.
 */
export function detectCodeLanguage(code: string): string {
  const sample = code.trim();

  if (/^nmap\s/i.test(sample) || /^\d+\/tcp\s/.test(sample) || /^PORT\s+STATE/i.test(sample)) {
    return 'bash';
  }
  if (/^docker\s/i.test(sample)) {
    return 'bash';
  }
  if (/^curl\s/i.test(sample)) {
    return 'bash';
  }
  if (
    /^(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE)\s/i.test(sample) ||
    /UNION SELECT/i.test(sample) ||
    /^' OR|^" OR|OR TRUE/i.test(sample) ||
    /^WHERE username/i.test(sample)
  ) {
    return 'sql';
  }
  if (/^<(?:script|img|svg|iframe)/i.test(sample)) {
    return 'html';
  }
  if (/^GET\s+\//.test(sample)) {
    return 'http';
  }
  if (/^https?:\/\//i.test(sample)) {
    return 'uri';
  }
  if (/^\/(?:rest|ftp|orders|root)/.test(sample)) {
    return 'http';
  }
  if (/^"[a-zA-Z]+":/.test(sample)) {
    return 'json';
  }
  if (/^BasketId:/i.test(sample)) {
    return 'ini';
  }

  return 'text';
}

/** Returns true when a line should render as a highlighted code block */
export function isCodeLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;

  if (/^nmap\s/i.test(trimmed)) return true;
  if (/^docker\s/i.test(trimmed)) return true;
  if (/^curl\s/i.test(trimmed)) return true;
  if (/^GET\s+\//.test(trimmed)) return true;
  if (/^(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE)\s/i.test(trimmed)) return true;
  if (/^' OR|^" OR|UNION SELECT|OR TRUE/i.test(trimmed)) return true;
  if (/^<(?:script|img|svg|iframe)/i.test(trimmed)) return true;
  if (/^https?:\/\//i.test(trimmed) && /(%20|UNION|search\?|grantComplete|\/ftp\/|\/metrics|\/orders\/)/i.test(trimmed)) return true;
  if (/^\/(?:rest|ftp|orders|root)\//.test(trimmed)) return true;
  if (/^\d+\/tcp\s/.test(trimmed)) return true;
  if (/^PORT\s+STATE/i.test(trimmed)) return true;
  if (/^BasketId:/i.test(trimmed)) return true;
  if (/^"[a-zA-Z]+":/.test(trimmed)) return true;
  if (/^WHERE username/i.test(trimmed)) return true;

  return false;
}

/** Infer a short label shown above code blocks in the viewer */
export function codeBlockLabel(language: string): string {
  const labels: Record<string, string> = {
    bash: 'Command',
    sql: 'SQL Payload',
    html: 'HTML Payload',
    http: 'HTTP',
    uri: 'URL',
    json: 'Payload',
    ini: 'Config',
    text: 'Code',
  };
  return labels[language] ?? 'Code';
}
