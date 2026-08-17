export default function SettingPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage your account preferences and application settings.
        </p>
      </div>

      {/* Settings Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        
        {/* Account Settings */}
        <div className="border-b border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/30">
              ⚙️
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                General Settings
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage your basic application preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          
          <div className="flex items-center justify-between p-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Notifications
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your notification preferences.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              Manage
            </button>
          </div>

          <div className="flex items-center justify-between p-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Privacy
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your privacy preferences.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Manage
            </button>
          </div>

          <div className="flex items-center justify-between p-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Account
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                View and manage your account information.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Manage
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}