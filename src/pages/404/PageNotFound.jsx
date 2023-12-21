import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  return (
    <main className="error">
      {/* Display the page header */}
      <PageHeader title="404 Page Not Found" description="Uh oh!" />

      <div className="error-description">
        <div className="row">
          <div className="col">
            {/* Display a message indicating the page was not found */}
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
            <p>Veillez à bien vérifier l'url ou naviguer vers une autre section du site.</p>

            {/* Provide a link back to the home page */}
            <Link to="/" className="home">
              <Button name="Acceuil" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
