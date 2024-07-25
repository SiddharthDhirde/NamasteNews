# NamasteNews

NamasteNews is a Next.js project that allows users to share news with the world. This project was created to gain a deeper understanding of Next.js and its features. The application uses MongoDB Atlas as a database for storing news content.

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [License](#license)

## Project Description

NamasteNews is a news-sharing platform where users can add and view news articles. The application consists of three main pages:
1. **Home Page (All News)**: Displays all the news articles.
2. **Add New News Page**: Allows users to add new news articles.
3. **Detail News Page**: A dynamic page that displays the details of a selected news article.

## Technologies Used

- Next.js
- React
- MongoDB Atlas
- Node.js

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SiddharthDhirde/namastenews.git
    cd namastenews
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables:
    Create a `.env.local` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=your_mongodb_atlas_uri
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Contributions

Contributions to the project are welcome! If you have any ideas for improvements or feature enhancements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
