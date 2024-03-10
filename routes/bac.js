import React, { useEffect, useState } from "react";
import { Layout } from "../../components/admin/Layouts";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

export const Post = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await axios.get("/api/v1/auth/all-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    getAllCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("location", location);
      formData.append("price", price);
      formData.append("phone", phone);
      formData.append("description", description);
      photos.forEach((photo, index) => {
        formData.append(`photo${index}`, photo);
      });
      
      const res = await axios.post("/api/v1/auth/create-post", formData);

      if (res && res.data.success) {
        console.log(res.data.message);
        navigate("/all-post");
      }
    } catch (error) {
      console.log("Error posting post:", error);
    }
  };

  return (
    <Layout>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Property</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-body">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Create Property</h3>
                </div>
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone"
                      />
                    </div>

                    <Select
                      placeholder="Select category"
                      onChange={(value) => {
                        setCategory(value);
                      }}
                    >
                      {categories?.map((c) => (
                        <Option key={c._id} value={c._id}>
                          {c.name}
                        </Option>
                      ))}
                    </Select>
                    <div className="mb-4">
                      <label className="btn btn-outline-primary col-md-12">
                        {photos.length > 0 ? `${photos.length} images selected` : "Upload Images"}
                        <input
                          type="file"
                          multiple
                          name="photo"
                          accept="image/*"
                          onChange={(e) => setPhotos([...e.target.files])}
                          hidden
                        />
                      </label>
                    </div>
                    <div className="text-center">
                      {photos.map((photo, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(photo)}
                          alt={`post_photo_${index}`}
                          height={"200px"}
                          className="img img-responsive"
                        />
                      ))}
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Property Description</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
