export default function UserCard({ user }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">

      {/* User Header */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <div className="min-w-0">
          <h2 className="truncate text-base font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>

          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100 dark:border-gray-800" />

      {/* User Details */}
      <div className="flex items-center justify-between">

        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
          User
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
          Active
        </span>

      </div>
    </div>
  );
}