const Unauthorized = () => {
  return (
    <main>
      <div className="container">
        <section className="section error-404 mt-5 d-flex flex-column align-items-center justify-content-center">
          <h1 className="alert text-dark">UnAuthorized</h1>
          <h2 className="alert alert-danger">
            Oops, you don't have the permission to access the requested
            resource.
          </h2>
        </section>
      </div>
    </main>
  );
};

export default Unauthorized;
