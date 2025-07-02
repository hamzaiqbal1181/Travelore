# Chatbot for Historical Places in Lahore

This project is a chatbot application that utilizes the Gemini API to provide information about historical places in Lahore, Pakistan. The chatbot allows users to ask questions and receive responses about various historical sites, enhancing their knowledge and experience.

## Project Structure

The project is organized as follows:

```
chatbot-gemini-lahore/
├── src/
│   ├── components/
│   │   ├── Chatbot.jsx        # Main chatbot interface component
│   │   └── Message.jsx        # Component for displaying individual messages
│   ├── api/
│   │   └── geminiApi.js       # Functions to interact with the Gemini API
│   ├── App.jsx                # Main application component
│   └── index.js               # Entry point of the application
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Travelore/chatbot-gemini-lahore
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   Start the development server:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to interact with the chatbot.

## Usage

- Type your questions about historical places in Lahore into the chat interface.
- The chatbot will respond with information retrieved from the Gemini API.
- You can ask about specific sites, their history, and other related queries.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.