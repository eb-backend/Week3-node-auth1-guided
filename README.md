# Node Auth 1 Guided Project

## takeaways
* authentication creates sessions
* Client gives credentials
* Server creates a session and sends it back to client (session ID)--> as a cookie
* prevent brute force attacks by using time complexities.
* Client stores the session ID locally (in the cookie jar)
* Client includes session ID when calling protected routes (from the cookie jar)
* server verifies session and provides or denies access
* session store is non persistent
* learned how to persist data using the connect-session-knex package
* learned how to delete our session from database (logout)

Guided project for **Node Auth 1** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds authentication to the API.
