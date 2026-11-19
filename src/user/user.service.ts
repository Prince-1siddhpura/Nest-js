import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alex Johnson', email: 'alex.johnson@example.com' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
    { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com' },
    { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
    { id: 7, name: 'David Taylor', email: 'david.taylor@example.com' },
    { id: 8, name: 'Laura Martinez', email: 'laura.martinez@example.com' },
    { id: 9, name: 'James Anderson', email: 'james.anderson@example.com' },
    { id: 10, name: 'Olivia Thomas', email: 'olivia.thomas@example.com' },
    { id: 11, name: 'Daniel Jackson', email: 'daniel.jackson@example.com' },
    { id: 12, name: 'Sophia White', email: 'sophia.white@example.com' },
    { id: 13, name: 'Matthew Harris', email: 'matthew.harris@example.com' },
    { id: 14, name: 'Ava Martin', email: 'ava.martin@example.com' },
    { id: 15, name: 'Ethan Thompson', email: 'ethan.thompson@example.com' },
    { id: 16, name: 'Isabella Garcia', email: 'isabella.garcia@example.com' },
    { id: 17, name: 'Lucas Robinson', email: 'lucas.robinson@example.com' },
    { id: 18, name: 'Mia Clark', email: 'mia.clark@example.com' },
    { id: 19, name: 'Benjamin Rodriguez', email: 'benjamin.rodriguez@example.com' },
    { id: 20, name: 'Charlotte Lewis', email: 'charlotte.lewis@example.com' },
    { id: 21, name: 'Henry Lee', email: 'henry.lee@example.com' },
    { id: 22, name: 'Amelia Walker', email: 'amelia.walker@example.com' },
    { id: 23, name: 'Alexander Hall', email: 'alexander.hall@example.com' },
    { id: 24, name: 'Harper Allen', email: 'harper.allen@example.com' },
    { id: 25, name: 'Liam Young', email: 'liam.young@example.com' },
  ];

  getUsers() {
    return this.users;
  }

  getUserPage(page: number = 1, limit: number = 10) {
    const currentPage = Math.max(1, Number(page) || 1);
    const currentLimit = Math.max(1, Number(limit) || 10);

    const totalUsers = this.users.length;
    const totalPages = Math.ceil(totalUsers / currentLimit);

    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = startIndex + currentLimit;
    const paginatedUsers = this.users.slice(startIndex, endIndex);

    return {
      users: paginatedUsers,
      totalUsers,
      currentPage,
      limit: currentLimit,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }

  getUserCount() {
    return this.users.length;
  }

  getUserById(id: string) {
    return {
      status: true,
      message: `This action returns a user by ID = ${id}`,
    };
  }

  getProfileByOrderId(profileid: string, orderid: string) {
    return {
      status: true,
      message: `This action returns a profile by profile ID = ${profileid} and order ID = ${orderid}`,
    };
  }

  getUserNameSearchinPage(
    name?: string,
    email?: string,
    page: number = 1,
    limit: number = 10,
  ) {
    let filteredUsers = this.users;

    // Check if name condition is true
    if (name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    // Check if email condition is true
    if (email) {
      filteredUsers = filteredUsers.filter((user) =>
        user.email.toLowerCase().includes(email.toLowerCase()),
      );
    }

    const currentPage = Math.max(1, Number(page) || 1);
    const currentLimit = Math.max(1, Number(limit) || 10);

    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / currentLimit);

    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = startIndex + currentLimit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      users: paginatedUsers,
      totalUsers,
      currentPage,
      limit: currentLimit,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }
}


