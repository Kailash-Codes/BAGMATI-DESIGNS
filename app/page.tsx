import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Next.js TypeScript Integration Demo
        </h2>
        <p className="text-gray-600">
          This project demonstrates the integration of popular packages in a Next.js TypeScript environment.
        </p>
      </div>

      <div className="space-y-8">
        {/* React Hook Form + Zod Validation Demo */}
        <section>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              React Hook Form + Zod Validation
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Form handling with TypeScript-first schema validation
            </p>
          </div>
          <UserForm />
        </section>

        {/* React Query + Axios Demo */}
        <section>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              React Query + Axios
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Data fetching and state management with automatic caching
            </p>
          </div>
          <UserList />
        </section>

        {/* Tailwind CSS Examples */}
        <section>
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Tailwind CSS Utilities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-800">Custom Colors</h4>
                <p className="text-blue-600 text-sm mt-2">
                  Using custom primary and secondary colors defined in tailwind.config.ts
                </p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg">
                <h4 className="font-semibold text-green-800">Component Classes</h4>
                <p className="text-green-600 text-sm mt-2">
                  Custom components like .card, .btn-primary, and .input-field
                </p>
              </div>
            </div>
            <button className="btn-primary mt-4">
              Example Button
            </button>
          </div>
        </section>

        {/* Technology Stack Info */}
        <section className="card max-w-4xl mx-auto bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Technology Stack
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Next.js 14:</strong> React framework with App Router</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>TypeScript:</strong> Type-safe development</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Tailwind CSS:</strong> Utility-first CSS framework</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>React Hook Form:</strong> Performant form handling</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Zod:</strong> TypeScript-first schema validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>React Query:</strong> Server state management</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span><strong>Axios:</strong> Promise-based HTTP client</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
