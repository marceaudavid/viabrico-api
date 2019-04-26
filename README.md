# VIABRICO

## Introduction

Viabrico is an API used as a SRM for a fictive company.

This API is hosted on Heroku : `https://viabrico.herokuapp.com/`

## Installation

Make sure git and node.js are installed on your computer. Then you can clone this repository :

```bash
git clone https://github.com/marceaudavid/viabrico.git
cd viabrico
```

Install the dependencies :

```bash
npm install
```

And launch the project :

```bash
npm run start
```

## Usage

### Example

Let's start by performing a `GET` request on one particular ressource :

`https://viabrico.herokuapp.com/suppliers/5`

Here is the response :

```json
{
  "id": 5,
  "name": "Amazon",
  "description": "Amazon, is an American multinational technology company based in Seattle, Washington that focuses in e-commerce, cloud computing, and artificial intelligence.",
  "address": "Seattle",
  "phone": 2025550147,
  "mail": "jeffbezos@amazon.com",
  "updatedAt": "2019-03-27T16:31:45.229Z",
  "createdAt": "2019-03-27T16:31:45.229Z"
}
```

### Authentication

In order to use this API you need to be authenticated. To do so, you only have to registered yourself and then login. Then you will receive a Json Web Token. Finally, to access the API ressources, use this token in an Authorization HTTP Header :

```http
Authorization: Bearer <JsonWebToken>
```

## Ressources and Endpoints

### Register

The register endpoint is used for register new users

**URL :** `https://viabrico.herokuapp.com/register`

| URI endpoints | Methods allowed | Description         |
| ------------- | --------------- | ------------------- |
| `/register`   | `POST`          | Register a new user |

**Payload :**

| Name       | Type     | Description         |
| ---------- | -------- | ------------------- |
| `email`    | _String_ | The user's email    |
| `password` | _String_ | The user's password |

### Login

The login endpoint is used for generate and return a new Json Web Token in order to authenticate registered users on this API clients.

**URL :** `https://viabrico.herokuapp.com/login`

| URI endpoints | Methods allowed | Description   |
| ------------- | --------------- | ------------- |
| `/login`      | `POST`          | Get all users |

**Payload :**

| Name       | Type     | Description         |
| ---------- | -------- | ------------------- |
| `email`    | _String_ | The user's email    |
| `password` | _String_ | The user's password |

### Suppliers

The supplier ressources is a set of viabrico suppliers.

**URL :** `https://viabrico.herokuapp.com/suppliers`

| URI endpoints    | Methods allowed        | Description                                          |
| ---------------- | ---------------------- | ---------------------------------------------------- |
| `/suppliers`     | `GET`, `POST`          | Get all suppliers or the added supplier              |
| `/suppliers/:id` | `GET`, `PUT`, `DELETE` | Get the specified supplier, update one or delete one |

**Attributes :**

| Name          | Type     | Required | Description                                    |
| ------------- | -------- | -------- | ---------------------------------------------- |
| `id`          | _Number_ | False    | The supplier's id (Auto Incremented)           |
| `name`        | _String_ | True     | The supplier's name                            |
| `description` | _String_ | True     | The supplier's description                     |
| `address`     | _String_ | True     | The supplier's address                         |
| `phone`       | _Number_ | True     | The supplier's phone number                    |
| `mail`        | _String_ | True     | The supplier's email address                   |
| `updatedAt`   | _Date_   | False    | The supplier's update date (Auto Fullfilled)   |
| `createdAt`   | _Date_   | False    | The supplier's creation date (Auto Fullfilled) |

### Users

The user ressources is the viabrico's dataset of users.

**URL :** `https://viabrico.herokuapp.com/users`

| URI endpoints | Methods allowed | Description                      |
| ------------- | --------------- | -------------------------------- |
| `/users`      | `GET`           | Get all users                    |
| `/users/:id`  | `GET`, `DELETE` | Get or delete the specified user |

**Attributes :**

| Name        | Type     | Required | Description                                    |
| ----------- | -------- | -------- | ---------------------------------------------- |
| `id`        | _Number_ | False    | The user's id (Auto Incremented)               |
| `email`     | _String_ | True     | The user's email address                       |
| `hash`      | _String_ | True     | The user's password hash                       |
| `updatedAt` | _Date_   | False    | The supplier's update date (Auto Fullfilled)   |
| `createdAt` | _Date_   | False    | The supplier's creation date (Auto Fullfilled) |

## About

Viabrico is a fictive company created for a student project.
