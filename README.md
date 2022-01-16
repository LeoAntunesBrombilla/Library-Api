<p>
  <h1 align="center"> Library-Api Project :books: </h1>
<p/>

<p align="center">
  <a href="https://codecov.io/gh/LeoAntunesBrombilla/Library-Api">
   <img src="https://codecov.io/gh/LeoAntunesBrombilla/Library-Api/branch/main/graph/badge.svg?token=Z72HUXRU90"/>
  </a>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=alert_status" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=bugs" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=code_smells" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=duplicated_lines_density" />
</p>

<p>
  <h2 align="center"> Technical Objectives </h1>
<p/>

- [x] CI/CD
- [ ] Test Coverage > 90%
- [ ] Clean Code

<p>
  <h2 align="center"> Features </h2>
<p/>

<p>
  <h3> Normal Users can </h3>
<p/>

- [ ] Read the info about a book
- [ ] Rent a book
- [ ] See a list of available books

<p>
  <h3> Admin Users can </h3>
<p/>

- [ ] Insert a book on the database
- [ ] Delete a book on the database
- [ ] Change a book on the database


## CI/CD

My CI/CD flow is set since the commit with husky. He won't accept any commit if any test fail and he will also lint the code. Then I have a CI/CD flow with github actions. Codecov / sonarcloud / build / Heroku. All of that automated with github actions.



