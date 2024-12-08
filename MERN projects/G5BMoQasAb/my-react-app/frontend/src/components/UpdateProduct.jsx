import React, { useEffect, useState } from "react";
import { Grid2, Paper, TextField, Typography, Button } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get/" + id);
      const resData = response.data;
      setProductData(resData.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setProductData({ ...productData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch("http://localhost:5000/update/" + id, {
        data: productData,
      });
      if (response?.data?.success === true) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <Grid2
        container
        alignContent="center"
        justifyContent="center"
        style={{ paddingTop: "50px" }}
      >
        <Paper
          elevation={3}
          style={{
            width: 550,
          }}
        >
          <Grid2
            //sx={Grid2Style}
            container
            direction="column"
            alignItems="center"
            gap={3}
          >
            <br />
            <Grid2 item>
              <Typography variant="h5">Add product</Typography>
            </Grid2>

            <Grid2 item>
              <Grid2 container direction="row" gap={3}>
                <Grid2 item>
                  <Grid2 container direction="column" gap={2}>
                    <Grid2 item>
                      <TextField
                        label="Title"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.title || ""}
                        name="title"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Brand"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.brand || ""}
                        name="brand"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Category"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.category || ""}
                        name="category"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Description"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.description || ""}
                        name="description"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Discount Percentage"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.discountPercentage || ""}
                        name="discountPercentage"
                        onChange={handleInputChanges}
                      />
                    </Grid2>
                  </Grid2>
                </Grid2>

                <Grid2 item>
                  <Grid2 container direction="column" gap={2}>
                    <Grid2 item>
                      <TextField
                        label="Image link"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.images || ""}
                        name="images"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Price"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.price || ""}
                        name="price"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.rating || ""}
                        name="rating"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Stock"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        type="number"
                        value={productData.stock || ""}
                        name="stock"
                        onChange={handleInputChanges}
                      />
                    </Grid2>

                    <Grid2 item>
                      <TextField
                        label="Thumbnail"
                        variant="outlined"
                        inputLabel={{
                          shrink: true,
                        }}
                        value={productData.thumbnail || ""}
                        name="thumbnail"
                        onChange={handleInputChanges}
                      />
                    </Grid2>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>

            <Grid2 item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </Grid2>
            <Grid2 item></Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    </React.Fragment>
  );
};

export default UpdateProduct;
