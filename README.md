# Dynamic Event Calendar Application

This is a **Dynamic Event Calendar Application** built with React. The application allows users to manage and view events in a calendar format, with features like adding, editing, and deleting events. It also includes local storage-based data persistence and an optional drag-and-drop feature for rescheduling events.

## Features

- **Calendar View**: 
  - Displays the current month with all days properly aligned.
  - Allows users to switch between months using "Previous" and "Next" buttons.
  
- **Event Management**:
  - Users can add, edit, and delete events by clicking on a day in the calendar.
  - Each event includes:
    - Event name
    - Start time and end time
    - Optional description
  
- **Event List**:
  - Displays a list of all events for the selected day in a modal or side panel.

- **Data Persistence**:
  - Events are stored in **localStorage** to persist between page refreshes.

- **Event Filtering**:
  - Allows filtering events by keywords.

- **Bonus Features** (Optional):
  - Drag-and-drop functionality for rescheduling events between days.
  - Event color coding for categories like work, personal, etc.
  - Export event list as a **JSON** or **CSV** file.

## Technologies Used

- React.js
- TailwindCSS for styling
- Shadcn components for UI elements
- LocalStorage for event data persistence

## Installation Instructions

Follow these steps to run the application locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/vasusharma-code/calander.git

2. Navigate to the project directory:
   cd dynamic-event-calendar

3. Install dependencies:
npm install

4. Run the app locally:
npm start

The application should now be running on http://localhost:3000.


Deployment
The app has been deployed on Vercel. You can view the live app here:


https://calander-eight.vercel.app/

Contributing
Feel free to fork this repository and submit pull requests for any improvements or features you'd like to add!


License
This project is licensed under the MIT License.
