import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Form
        onSubmit={submitHandler}
        inline
        className="w-50 d-flex align-items-lg-center flex-lg-row flex-column"
      >
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5 my-4"
        ></Form.Control>
        <Button
          type="submit"
          variant="light"
          className=" h-50 px-4 mx-sm-0 mx-lg-4"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
