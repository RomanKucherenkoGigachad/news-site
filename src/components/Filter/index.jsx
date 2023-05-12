/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import * as React from "react";
import { PropTypes } from "prop-types";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box className="filter" data-testid="filter-container-element">
      <FormControl fullWidth>
        <InputLabel />
        <Select
          value={filter}
          onChange={handleChange}
          data-testid="select-button-element"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="authors">Authors</MenuItem>
          <MenuItem value="tags">Tags</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
