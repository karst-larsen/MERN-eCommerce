import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, keyword = "", isAdmin = false }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((page) => (
          <LinkContainer
            key={page + 1}
            to={
              // Check if there's a keyword for search filter, if so then include the search param, if not then just the page
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${page + 1}`
                  : `/page/${page + 1}`
                : `/admin/productlist/${page + 1}`
            }
          >
            <Pagination.Item active={page + 1 === page}>
              {page + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
