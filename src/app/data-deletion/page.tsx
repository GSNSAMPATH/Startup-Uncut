export default function DataDeletion() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white text-black">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Data Deletion Instructions</h1>
        <p className="text-lg mb-4">
          Startup Uncut does not store personal data on our servers. However, if you wish to request deletion of data related to your interactions with our app, please contact us at:
        </p>
        <a
          href="mailto:startupuncut@gmail.com"
          className="text-blue-600 underline font-medium"
        >
          startupuncut@gmail.com
        </a>
        <p className="mt-6 text-sm text-gray-600">
          We will process all deletion requests within 7 business days.
        </p>
      </div>
    </main>
  );
}
