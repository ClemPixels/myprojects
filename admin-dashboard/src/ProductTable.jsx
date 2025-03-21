import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TextField,
} from "@mui/material";

// Generate 300 sample products
const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Toys",
  "Beauty",
];
const products = Array.from({ length: 300 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: parseFloat((Math.random() * 100).toFixed(2)),
  category: categories[Math.floor(Math.random() * categories.length)],
}));

const ProductTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="main-container">
      <Paper
        style={{
          width: "90%",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#1d2634",
          color: "#fff",
        }}
      >
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          style={{
            marginBottom: "10px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer
          style={{
            maxHeight: "420px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow style={{ backgroundColor: "#252f3e" }}>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #3a4b5c",
                    backgroundColor: "#3a4b5c",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #3a4b5c",
                    backgroundColor: "#3a4b5c",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #3a4b5c",
                    backgroundColor: "#3a4b5c",
                  }}
                >
                  Price ($)
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #3a4b5c",
                    backgroundColor: "#3a4b5c",
                  }}
                >
                  Category
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <TableRow
                    key={product.id}
                    style={{
                      backgroundColor: "#252f3e",
                      color: "white",
                      borderBottom: "1px solid #3a4b5c",
                    }}
                  >
                    <TableCell
                      style={{
                        color: "white",
                        borderBottom: "1px solid #3a4b5c",
                      }}
                    >
                      {product.id}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        borderBottom: "1px solid #3a4b5c",
                      }}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        borderBottom: "1px solid #3a4b5c",
                      }}
                    >
                      {product.price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        borderBottom: "1px solid #3a4b5c",
                      }}
                    >
                      {product.category}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ color: "white" }}
        />
      </Paper>
    </main>
  );
};

export default ProductTable;
