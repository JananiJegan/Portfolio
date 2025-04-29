const AuthService = {
    signup: async (userData) => {
        console.log('AuthService signup:', userData);
        // Simulate an API call (replace with your actual API call)
        await new Promise(resolve => setTimeout(resolve, 500));

        // In a real app, you'd hash the password here before storing it
        // const hashedPassword = await bcrypt.hash(userData.password, 10);
        // const userToStore = { ...userData, password: hashedPassword };

        localStorage.setItem('user', JSON.stringify(userData)); // Store original userData
        return { success: true, user: userData };
    },
    login: async (email, password) => {
        console.log('AuthService login - Email:', email, 'Password:', password);
        const user = localStorage.getItem('user');
        console.log('AuthService login - Retrieved user:', user);

        if (!user) {
            throw new Error('User not found. Please sign up');
        }

        try {
            const parsedUser = JSON.parse(user);
            console.log('AuthService login - Parsed user:', parsedUser);

            // In a real app, you'd compare the hashed password here
            // const passwordMatch = await bcrypt.compare(password, parsedUser.password);
            if (parsedUser.email !== email || parsedUser.password !== password) {
                throw new Error('Invalid credentials');
            }
            return { success: true, user: parsedUser };
        } catch (error) {
            console.error("Error parsing user:", error);
            throw new Error('Error processing user data.');
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated'); // Clear auth state
        localStorage.removeItem('loggedInUser');    // Clear logged in user
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('isAuthenticated'); // Check for the auth flag
    },
    getUser: () => {
        const user = localStorage.getItem('loggedInUser');
        return user ? JSON.parse(user) : null;
    }
};

export default AuthService;