export default function IndexPage() {
  return (
    <html lang="en">
      <head>
        <title>Fika - A Minimal Web Framework</title>
        <link rel="stylesheet" href="/style.css" />
        <meta
          name="description"
          content="Fika is a minimal web framework built on Hono, React, and web platform primitives"
        />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Fika
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A minimal web framework for modern applications
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Built with modern primitives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Hono
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning-fast web framework with a delightful API
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  React
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Component-based UI with familiar developer experience
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Web Standards
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging platform primitives like import maps and native ES
                  Modules for optimal performance
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Get Started
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build your next project with Fika's simple yet powerful toolset
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/hamlim/fika"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="/docs"
                className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Documentation
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
