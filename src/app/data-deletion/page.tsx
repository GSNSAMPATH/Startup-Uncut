export default function DataDeletion() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Data Deletion Request</h1>
      <p className="mb-4">
        If you have an account or have shared personal data with 
        <strong> Your Company Name</strong>, you can request data deletion at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request Deletion</h2>
      <p className="mb-4">
        To delete your personal data, please send an email to:
      </p>
      <p className="mb-4">
        📧 <a href="mailto:privacy@yourcompany.com" className="text-blue-600 underline">
          privacy@yourcompany.com
        </a>
      </p>
      <p className="mb-4">
        Include the following details in your request:
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li>Your full name</li>
        <li>Email address associated with your account</li>
        <li>Brief message requesting data deletion</li>
      </ul>

      <p className="mt-6">
        Once your request is verified, your data will be permanently deleted from our systems 
        within 7–14 business days.
      </p>

      <p className="text-gray-500 text-sm mt-10">Last updated: October 2025</p>
    </main>
  );
}
