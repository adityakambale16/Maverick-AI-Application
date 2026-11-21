// Suggested prompts shown on the welcome screen
export const suggestedPrompts = [
    "Explain Artificial Intelligence",
    "Write a Java program",
    "Explain React.js",
    "Give me project ideas",
    "What is Machine Learning?"
]

// Each item has keywords to look for in the user's message and a dummy reply
export const responses = [
    {
        keywords: ['artificial intelligence', ' ai '],
        reply: "Artificial Intelligence (AI) is the field of computer science that builds systems able to perform tasks that normally need human intelligence, such as understanding language, recognising images, and making decisions."
    },
    {
        keywords: ['machine learning', ' ml '],
        reply: "Machine Learning is a part of AI where computers learn patterns from data instead of being programmed with fixed rules. Common types are supervised, unsupervised and reinforcement learning."
    },
    {
        keywords: ['java program', 'write a java'],
        reply: "Here is a simple Java program:\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n\nSave it as Main.java, compile it with javac and run it with java Main."
    },
    {
        keywords: ['java'],
        reply: "Java is a high-level, object-oriented programming language used to develop different types of applications, from Android apps to large web back ends."
    },
    {
        keywords: ['react'],
        reply: "React.js is a JavaScript library for building user interfaces. You build small reusable components, keep data in state, and React updates the screen when that state changes."
    },
    {
        keywords: ['project idea', 'project'],
        reply: "Here are a few project ideas:\n1. Weather app using a public API\n2. Expense tracker with charts\n3. To-do app with Context API\n4. E-commerce cart with React Router\n5. Quiz app with a score board"
    },
    {
        keywords: ['hello', 'hi', 'hey'],
        reply: "Hello! Nice to meet you. Ask me anything about programming, AI or your projects."
    },
    {
        keywords: ['javascript'],
        reply: "JavaScript is the language of the web. It runs in the browser and, with Node.js, on servers too."
    },

    {
        keywords : ['nutan ', 'mayuri'],
        reply : "Nutan is proportional to Newton and Mayuri is penctual and both are fighters"
    }
]

export const defaultReply = "This is a demo chat, so I only have predefined answers. Try asking about Java, React, Machine Learning or project ideas."

// Finds the first response whose keyword appears in the message
export function getReply(message) {
    const text = ' ' + message.toLowerCase() + ' '
    const match = responses.find(item =>
        item.keywords.some(word => text.includes(word))
    )
    return match ? match.reply : defaultReply
}
