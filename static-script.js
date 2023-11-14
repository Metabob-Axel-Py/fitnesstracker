// Mock user data for demonstration
const mockUser = {
    username: 'user123',
    fitnessData: [
        { activity: 'Running', duration: 30 },
        { activity: 'Cycling', duration: 45 },
        // ... other fitness data
    ],
    goalProgress: 60,
};

// Function to simulate user login
function login() {
    // Intentional mistake: No actual login logic
    alert('Login successful!');
    showDashboard();
}

// Function to display the dashboard
function showDashboard() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.remove('hidden');

    // Mock data display (replace with actual data fetching logic)
    displayFitnessData(mockUser.fitnessData);
    displayGoalProgress(mockUser.goalProgress);
}

// Function to display fitness data on the dashboard
function displayFitnessData(data) {
    const fitnessDataContainer = document.getElementById('fitness-data');
    fitnessDataContainer.innerHTML = '<h2>Fitness Data</h2>';
    
    // Intentional mistake: Incorrect loop variable 'i' instead of 'entry'
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        fitnessDataContainer.innerHTML += `<p>${entry.activity}: ${entry.duration} minutes</p>`;
    }
}

// Function to display goal progress chart on the dashboard
function displayGoalProgress(progress) {
    const chartContainer = document.getElementById('goal-progress-chart');
    chartContainer.innerHTML = `<h2>Goal Progress</h2><p>${progress}%</p>`;
}

// Function to submit a workout form
function submitWorkout() {
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;

    // Intentional mistake: No actual form submission logic
    alert(`Workout submitted: ${activity}, ${duration} minutes`);
}
