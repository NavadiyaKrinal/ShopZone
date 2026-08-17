import UserCard from "../components/UserCard";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function DashboardPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Dashboard
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Users
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage and view all registered users.
          </p>
        </div>

        {/* User Count */}
        <div className="mb-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Users
            </p>

            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {users.length}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl dark:bg-blue-900/30">
            👥
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

      </div>
    </main>
  );
}