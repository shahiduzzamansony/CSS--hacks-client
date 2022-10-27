import React from "react";

const Blogs = () => {
  return (
    <div className="mt-5">
      <div className="w-75 bg-light rounded mx-auto my-4 p-3">
        <h2>what is cors?</h2>
        <p>
          As you've possibly already come across by now, CORS is an acronym for
          Cross-Origin Resource Sharing, but what does that actually mean? What
          is CORS? Well, if we go by the Wikipedia definition, "[CORS] is a
          mechanism that allows restricted resources on a web page to be
          requested from another domain outside the domain from which the first
          resource was served," then you'd be forgiven if you were more confused
          than before you'd read that sentence. Before we get into defining
          CORS, it's best to know what came before, as it still defines the
          default behavior and is probably why you're reading this now. This
          precursor to CORS was called the "Same-Origin" policy. In short, it
          dictates that when your browser loads a script (like a button handler,
          or some async widget) from a particular (sub)domain that the script
          can only make requests to the (sub)domain that it originated from.
        </p>
      </div>
      <div className="w-75 bg-light rounded mx-auto my-4 p-3">
        <h2>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Other options are STYTCH. Ory. Supabase. Okta. PingIdentity.
          Keycloak. Frontegg. Authress.
        </p>
      </div>
      <div className="w-75 bg-light rounded mx-auto my-4 p-3">
        <h2>How does the private route work?</h2>
        <p>
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login. The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login. In this article,
          we can see. How to create public and private routes using react-router
          for your react apps.
        </p>
      </div>
      <div className="w-75 bg-light rounded mx-auto my-4 p-3">
        <h2>What is Node? How does Node work?</h2>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
