"use client";
import { useEffect, useState } from "react";

interface User {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: number;
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    dob: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }

export const UseDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?results=6`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    loading,
    fetchUsers,
    users,
  };
};
