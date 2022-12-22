import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "eBook Site",
  description: "Your favourite books, all in one place",
  keywords: "books, eBooks, eCommerce",
};

export default Meta;
