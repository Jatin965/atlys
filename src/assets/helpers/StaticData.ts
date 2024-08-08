export const postsData = [
  {
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    userName: "John Doe",
    postTime: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
    isEdited: true,
    menuOptions: ["Edit", "Delete", "Report"],
    emoji: "😀",
    content:
      "Jatin has a strong command of JavaScript, TypeScript, and React.js, consistently delivering scalable, high-performance applications. His deep understanding of modern front-end technologies and best practices makes him a standout developer.",
    commentCount: 5,
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/28.jpg",
    userName: "Jane Smith",
    postTime: Date.now() - 30 * 60 * 1000, // 30 minutes ago
    isEdited: false,
    menuOptions: ["Edit", "Delete", "Share"],
    emoji: "👍",
    content:
      "With expertise in optimizing applications for speed and scalability, Jatin ensures that every project he works on is not only functional but also highly efficient. His problem-solving skills and attention to detail are second to none.",
    commentCount: 12,
  },
  {
    userImage: "https://randomuser.me/api/portraits/women/17.jpg",
    userName: "Alice Johnson",
    postTime: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
    isEdited: true,
    menuOptions: ["Edit", "Report"],
    emoji: "🚀",
    content:
      "Jatin's ability to write clean, maintainable code and his proficiency in Python, JavaScript, and React.js make him a versatile developer. His contributions to complex projects have been instrumental in their success.",
    commentCount: 8,
  },
];
