# Zarish Frontend Shell

**Part of the ZarishSphere Platform - A No-Code FHIR Healthcare Data Management System**

The Zarish Frontend Shell is the main web application that serves as the microfrontend container for the ZarishSphere Platform. It provides a unified user interface for healthcare data management, patient records, and FHIR resource interactions.

## 🚀 Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 3
- **Routing**: React Router DOM 7
- **Authentication**: Keycloak JS
- **HTTP Client**: Axios
- **Linting**: ESLint 9

## 📋 Prerequisites for Local Development

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 20 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js (verify with `npm --version`)
- **Git**: For version control ([Download Git](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download VS Code](https://code.visualstudio.com/))

### Checking Your Installation

Open a terminal and run these commands to verify:

```bash
node --version   # Should show v20.x.x or higher
npm --version    # Should show 10.x.x or higher
git --version    # Should show git version 2.x.x
```

## 🛠️ Step-by-Step Development Setup

### Step 1: Clone the Repository

```bash
# Navigate to your desired directory
cd ~/Desktop

# Clone the repository
git clone https://github.com/ZarishSphere-Platform/zarish-frontend-shell.git

# Navigate into the project
cd zarish-frontend-shell
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

This will download and install all the packages listed in `package.json`. It may take a few minutes.

### Step 3: Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Create the environment file
touch .env
```

Add the following configuration (adjust values as needed):

```env
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=zarish
VITE_KEYCLOAK_CLIENT_ID=zarish-frontend
VITE_FHIR_SERVER_URL=http://localhost:8081/fhir
VITE_TERMINOLOGY_SERVER_URL=http://localhost:8082
```

### Step 4: Start the Development Server

```bash
# Start the development server
npm run dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is busy).

### Step 5: Open in Browser

Open your web browser and navigate to:
```
http://localhost:5173
```

You should see the Zarish Frontend Shell application running!

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Deploy to GitHub Pages |

## 📁 Project Structure

```
zarish-frontend-shell/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # TailwindCSS configuration
```

## 🧪 Testing Your Changes

### Manual Testing

1. Make your code changes
2. Save the file (Vite will automatically reload)
3. Check the browser for updates
4. Test the functionality

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🚀 Deployment

The application automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

The deployed site will be available at:
```
https://zarishsphere-platform.github.io/zarish-frontend-shell/
```

## 🔐 Authentication Setup

The application uses Keycloak for authentication. To set up Keycloak:

1. Install Keycloak locally or use a hosted instance
2. Create a realm named `zarish`
3. Create a client named `zarish-frontend`
4. Configure the client as a public client
5. Update the `.env` file with your Keycloak URL

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
# Vite will automatically use the next available port
# Check the terminal output for the actual port
```

### Dependencies Installation Fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Build Errors

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [FHIR Specification](https://www.hl7.org/fhir/)

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push to your branch
6. Create a pull request

## 📄 License

This project is part of the ZarishSphere Platform.

## 🆘 Getting Help

If you encounter any issues:

1. Check the [Issues](https://github.com/ZarishSphere-Platform/zarish-frontend-shell/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🔗 Related Repositories

- [zarish-fhir-server](https://github.com/ZarishSphere-Platform/zarish-fhir-server) - FHIR Server Backend
- [zarish-terminology-server](https://github.com/ZarishSphere-Platform/zarish-terminology-server) - Terminology Server
- [zarish-fhir-infra](https://github.com/ZarishSphere-Platform/zarish-fhir-infra) - Infrastructure & Deployment
