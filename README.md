# Library-Api

[![codecov](https://codecov.io/gh/LeoAntunesBrombilla/Library-Api/branch/main/graph/badge.svg?token=Z72HUXRU90)](https://codecov.io/gh/LeoAntunesBrombilla/Library-Api)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LeoAntunesBrombilla_Library-Api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LeoAntunesBrombilla_Library-Api)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=LeoAntunesBrombilla_Library-Api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LeoAntunesBrombilla_Library-Api&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LeoAntunesBrombilla_Library-Api)

## A library API with the following features

### Technical Specs

- [x] CI/CD
- [ ] Test Coverage > 90%
- [ ] Clean Code

### Normal Users can

- [ ] Read the info about a book
- [ ] Rent a book
- [ ] See a list of available books

### Admin Users can

- [ ] Insert a book on the database
- [ ] Delete a book on the database
- [ ] Change a book on the database


## CI/CD

My CI/CD flow is set since the commit with husky. He won't accept any commit if any test fail and he will also lint the code. Then I have a CI/CD flow with github actions. Codecov / sonarcloud / build / Heroku. All of that automated with github actions.



