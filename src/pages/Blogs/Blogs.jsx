const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">Blog Page</h1>
        <h3 className="font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <br />
        <p>
          Refresh tokens allow you to balance your users access needs with your
          organizations security practices. Access tokens help users get the
          resources they need to complete their tasks, but such tokens can also
          expose your organization to data compromise or other malicious actions
          if a hacker is able to steal them. <br />
          Refresh token like as NID card and access token like as passport.
        </p>
        <br />


        <h3 className="font-bold">2. Compare SQL and NoSQL databases?</h3>{" "}
        <br />
        <p className="text-justify">
          The PropTypes utility exports a wide range of validators for
          configuring type definitions. Below, we will list the available
          validators for basic, renderable, instance, multiple, collection, and
          required prop types.
        </p>
        <ul>
          Basic types of SQL and NoSQL databases <br />
          <li className="list-disc">
            SQL databases are relational, and NoSQL databases are
            non-relational.
          </li>
          <li className="list-disc">
            SQL databases use structured query language (SQL) and have a
            predefined schema. NoSQL databases have dynamic schemas for
            unstructured data.
          </li>
          <li className="list-disc">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li className="list-disc">
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li className="list-disc">
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </ul>
        <br />


        <h3 className="font-bold">
          3. What is express js? What is Nest JS?
        </h3>
        <br />
        <p className="text-justify">
          <p className="underline font-bold">Nest JS</p>
          NestJS is a Node.js framework for building server-side applications.
          It is based on TypeScript and JavaScript.When we want to build a
          large-scale application with a framework, Express.js is usually the
          first thing that comes to mind. Express has gained popularity in the
          last few years among developers. NestJS is another popular framework
          that can do the job pretty well, too. As both Nest and Express are
          used as frameworks for Node.js applications, there have been a hot
          debate over which option is better for developers starting a new Node
          project. In this article, we will be comparing NestJS and Express.js
          to help developers make an informed decision.
        </p>
        <p className="underline font-bold">Express JS</p>
        <p>
          Express is a Node.js web application framework that provides a wide
          range of functionality for constructing web and mobile applications.
          It is a layer built on top of Node that aids in the management of
          servers and routes. You can use Express with Node to create
          single-page, multi-page, or hybrid web applications. It supports the
          MVC architectural pattern for designing web applications: Model, View,
          and Controller.
        </p>
        <br />

        
        <h3 className="font-bold">
          4. What is MongoDB aggregate and how does it work?
        </h3>
        <br />
        <p className="text-justify">
        Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br />
        MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Blogs;
