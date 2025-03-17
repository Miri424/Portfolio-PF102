import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constant/api/api";
import axios from "axios";
import "./AdminTable.css";
import { toast, ToastContainer } from "react-toastify";

const AdminTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/posts`);
      setPosts(response.data.data);
    } catch (err) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Ar yu şur?")) {
      try {
        await axios.delete(`${BASE_URL}/api/posts/${id}`);
        toast.success("Post deleted successfully!");
        setPosts(posts.filter((post) => post._id !== id));
      } catch (err) {
        toast.error("Some error occured");
      }
    }
  };

  if (loading) {
    return <h2>Yüklənir...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div className="admin-table-container">
      <ToastContainer />        
      <h2>Postlar</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
                  />
                </td>
                <td>{post.title}</td>
                <td>{post.categoryId?.name || "Bilinmir"}</td>
                <td>
                  {post.content.length > 50
                    ? post.content.slice(0, 50) + "..."
                    : post.content}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No post yet!.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
