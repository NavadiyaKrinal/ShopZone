export default function SettingPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            PAGE HEADER
        =========================================== */}

        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage your account preferences and application settings.
          </p>

        </div>

        {/* ==========================================
            SETTINGS CARD
        =========================================== */}

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

          {/* ========================================
              GENERAL SETTINGS HEADER
          ========================================= */}

          <div className="border-b border-gray-200 p-6 dark:border-gray-800 sm:p-8">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/30">
                ⚙️
              </div>

              <div>

                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  General Settings
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your basic application preferences.
                </p>

              </div>

            </div>

          </div>

          {/* ========================================
              SETTINGS OPTIONS
          ========================================= */}

          <div className="divide-y divide-gray-200 dark:divide-gray-800">

            {/* Notifications */}

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

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
                className="w-full rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:w-auto cursor-pointer"
              >
                Manage
              </button>

            </div>

            {/* Privacy */}

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

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
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto cursor-pointer"
              >
                Manage
              </button>

            </div>

            {/* Account */}

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

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
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto cursor-pointer"
              >
                Manage
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}