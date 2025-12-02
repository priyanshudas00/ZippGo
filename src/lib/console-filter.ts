// Suppress Fast Refresh console messages in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalInfo = console.info;

  console.log = (...args) => {
    const message = args.join(' ');
    if (message.includes('[Fast Refresh]') || 
        message.includes('turbopack-hot-reloader') ||
        message.includes('report-hmr-latency')) {
      return; // Suppress these messages
    }
    originalLog.apply(console, args);
  };

  console.warn = (...args) => {
    const message = args.join(' ');
    if (message.includes('[Fast Refresh]') || 
        message.includes('turbopack-hot-reloader') ||
        message.includes('report-hmr-latency')) {
      return; // Suppress these messages
    }
    originalWarn.apply(console, args);
  };

  console.info = (...args) => {
    const message = args.join(' ');
    if (message.includes('[Fast Refresh]') || 
        message.includes('turbopack-hot-reloader') ||
        message.includes('report-hmr-latency')) {
      return; // Suppress these messages
    }
    originalInfo.apply(console, args);
  };
}

export {};