# Manath Mansion Residents Manager

This project is a resident management application built with React, React Router, and React Hook Form. The app allows you to create, list, edit, and delete residents.
## Features

- **Resident Listing**: View a list of residents.
- **Create resident**: Add a new resident to the list.
- **Edit resident**: Modify the details of an existing resident.
- **Delete resident**: Remove residents from the list.
- **Validation**: Form validation to ensure data integrity.

## Technologies Used

- React
- React Router
- React Hook Form
- React Toastify for notifications
- CSS for styling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-residentname/resident-management-app.git
   cd resident-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## API

The app communicates with a backend server to manage resident data. It also builds and ensures that the json-based backend server, built using the React JSON server package, is running and accessible at `http://localhost:8000`.

### Endpoints

- `GET /user` - Fetch all residents
- `POST /user` - Create a new resident
- `GET /user/:id` - Fetch a specific resident by ID
- `PUT /user/:id` - Update a specific resident by ID
- `DELETE /user/:id` - Delete a specific resident by ID

## Components

### `App.js`

The main component that sets up routing for the application.

### `UserListing.js`

Displays the list of residents with options to add, edit, or delete residents.

### `UserCreate.js`

Form to create a new resident.

### `EditForm.js`

Form to edit an existing resident.

## Usage

### resident Listing

The main page displays a list of residents. You can select residents using the checkboxes provided.

### Add New resident

Click the "Add New" button to navigate to the resident creation form. Fill in the details and submit the form to add a new resident.

### Edit resident

Select exactly one resident and click the "Edit" button to navigate to the resident editing form. Modify the details and submit the form to update the resident.

### Delete resident

Select one or more residents and click the "Delete" button to remove the selected residents from the list.

## Form Validation

The forms include validation to ensure that:

- Name and email are required fields.
- Age must be a number between 18 and 50.
- resident type must be selected from the provided options.

## Notifications

React Toastify is used to display success and error messages for various actions such as adding, editing, or deleting residents.


---

