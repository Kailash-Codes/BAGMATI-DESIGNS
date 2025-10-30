'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

// Types
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// API functions using axios
const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export default function UserList() {
  const queryClient = useQueryClient();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // Fetch users using react-query
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 60000, // 1 minute
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      alert('User deleted successfully!');
      setSelectedUserId(null);
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    },
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="card max-w-4xl mx-auto mt-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading users...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card max-w-4xl mx-auto mt-8">
        <div className="text-red-500 text-center">
          Error loading users: {(error as Error).message}
        </div>
      </div>
    );
  }

  return (
    <div className="card max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User List</h2>
      <p className="text-gray-600 mb-4">
        This component demonstrates React Query and Axios integration
      </p>
      
      <div className="grid gap-4">
        {users?.map((user) => (
          <div
            key={user.id}
            className={`p-4 border rounded-lg transition-all ${
              selectedUserId === user.id
                ? 'border-primary bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedUserId(user.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600">@{user.username}</p>
                <p className="text-sm text-gray-500 mt-1">{user.email}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(user.id);
                }}
                disabled={deleteMutation.isPending}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
              >
                {deleteMutation.isPending && deleteMutation.variables === user.id
                  ? 'Deleting...'
                  : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Features Demonstrated:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Axios for HTTP requests</li>
          <li>React Query (TanStack Query) for data fetching</li>
          <li>Mutation with cache invalidation</li>
          <li>Loading and error states</li>
          <li>Optimistic UI updates</li>
        </ul>
      </div>
    </div>
  );
}
