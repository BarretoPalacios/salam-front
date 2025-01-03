import Navbar from "../components/Navbar";
import SecctionPg from "../components/SecctionPg";

export default function Gatos() {
  return (
    <SecctionPg
      title="Productos para Gatos"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={74}
          height={74}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-dog"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 5h2" />
          <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
          <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
          <path d="M12 18v2" />
          <path d="M10 11v.01" />
          <path d="M14 11v.01" />
          <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
          <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
        </svg>
      }
      apiEndpoint="products"
      baseUrl="https://salam-back.onrender.com"
      categoryId={2}
      backgroundImage="https://es.zooexperte.com/image/cache/catalog/Der%20Zoo%20Exsperte/Blog/kitten-entwicklung-w1920-h1272.jpg"
      backgroundColor="#B988C8"
    />
  );
}
