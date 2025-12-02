document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Your ROS Learning Plan Data (UPDATED with Instructions) ---
    const rosPlan = [
        {
            week: 1,
            title: 'Motors & Drivers',
            goal: 'Understand 80% of robotics actuation.',
            days: [
                { task: 'Torque–speed curve', instruction: 'Draw the ideal curve from memory. Understand the trade-off: high torque at low speed, or low torque at high speed.' },
                { task: 'Servo vs DC vs Stepper', instruction: 'Create a simple comparison table (e.g., control complexity, cost, precision, max speed).' },
                { task: 'L298N driver basics', instruction: 'Draw a schematic showing how it connects to Arduino, power, and a DC motor. Understand the role of the enable pins.' },
                { task: 'PWM understanding', instruction: 'Use an oscilloscope (or an online simulator) to visualize the difference between a 10%, 50%, and 90% duty cycle.' },
                { task: 'Avoid burning motors/drivers', instruction: 'Identify the top 3 reasons motors/drivers fail (e.g., lack of heatsink, wrong voltage/current, no flyback diodes).' },
                { task: 'Interpret 1 motor datasheet', instruction: 'Find the no-load speed, stall torque, and rated voltage. Calculate the maximum efficiency point.' },
                { task: '(PROJECT) Motor selection sheet for a robot joint', instruction: 'Given a joint payload and speed requirement, justify your motor/driver selection based on specifications.' }
            ]
        },
        {
            week: 2,
            title: 'Sensors',
            goal: 'Know the 5 core robotics sensors.',
            days: [
                { task: 'Limit switches', instruction: 'Understand Normally Open (NO) vs Normally Closed (NC). Choose which is safer for a robot emergency stop.' },
                { task: 'Encoders', instruction: 'Differentiate between incremental and absolute encoders. Understand quadrature signal A/B for direction sensing.' },
                { task: 'IMUs', instruction: 'Explain the role of the accelerometer (gravity) and gyroscope (rotation rate). Know why a magnetometer is often added (yaw drift correction).' },
                { task: 'Distance sensors', instruction: 'Compare TOF (Time-of-Flight) vs Ultrasonic vs IR in terms of range, accuracy, and price.' },
                { task: 'Force sensors', instruction: 'Research FSRs (Force Sensing Resistors) and Strain Gauges. Understand where each is best used in a robot.' },
                { task: 'Encoder datasheet reading', instruction: 'Find the PPR (Pulses Per Revolution) or CPR (Counts Per Revolution). Calculate the angular resolution.' },
                { task: '(PROJECT) Sensor selection for robotic gripper', instruction: 'Propose and justify a sensor set (e.g., limit switch, FSR, encoder) for a simple pick-and-place gripper application.' }
            ]
        },
        {
            week: 3,
            title: 'Practical Electronics Safety',
            goal: 'Troubleshoot & design safe circuits.',
            days: [
                { task: 'Separate power for motors', instruction: 'Draw a block diagram showing why motors and microcontrollers must have separate, but often common-grounded, power sources.' },
                { task: 'Buck converters', instruction: 'Understand the concept of a DC-DC step-down converter. Find one on a supplier site and note its input/output specs.' },
                { task: 'Wiring mistakes', instruction: 'List the top 3 common wiring mistakes that cause failures (e.g., reverse polarity, using thin wires for high current, short circuits).' },
                { task: 'Voltage drop', instruction: 'Use Ohm’s law to calculate voltage drop across a long, thin wire. Understand why this is critical for motor performance.' },
                { task: 'Heat issues in drivers', instruction: 'Research thermal runaway. Understand the purpose of a heatsink and how to choose the right one for a driver chip.' },
                { task: 'Fuses', instruction: 'Differentiate between fast-blow and slow-blow fuses. Choose the correct type for a motor circuit and justify the amperage rating.' },
                { task: '(PROJECT) Wiring diagram for gripper + servo + limit switch', instruction: 'Create a clear, color-coded diagram (hand-drawn or digital) showing all components and power connections.' }
            ]
        },
        {
            week: 4,
            title: 'Python Basics',
            goal: 'Become comfortable in programming.',
            days: [
                { task: 'Variables & types', instruction: 'Write and run a script using integers, floats, booleans, and strings. Understand type casting (e.g., `int()` vs `float()`).' },
                { task: 'Loops', instruction: 'Use both `for` (to iterate over a list) and `while` (to run until a condition is met) loops.' },
                { task: 'Conditionals', instruction: 'Write code using `if`, `elif`, and `else` blocks. Practice using comparison (`>`, `==`) and logical (`and`, `or`) operators.' },
                { task: 'Functions', instruction: 'Write a function that takes two inputs, performs a calculation, and returns a value. Understand arguments and return statements.' },
                { task: 'Lists/dicts', instruction: 'Practice adding, removing, and accessing elements in both lists (ordered) and dictionaries (key-value pairs).' },
                { task: 'File I/O', instruction: 'Learn to use the `with open(...)` structure to read data from a file and write data to a new file.' },
                { task: '(PROJECT) TXT data processor script', instruction: 'Write a script that reads a simple text file of numbers, calculates the average, and prints the result.' }
            ]
        },
        {
            week: 5,
            title: 'Python for Engineering',
            goal: 'Use Python like a real engineer.',
            days: [
                { task: 'Numpy arrays', instruction: 'Create a 1D and a 2D NumPy array. Understand the difference between standard list operations and NumPy array operations (element-wise).' },
                { task: 'Matrix multiplication', instruction: 'Practice multiplying a 3x3 matrix by a 3x1 vector using `@` (or `np.dot()`).' },
                { task: 'Load motor dataset', instruction: 'Find a sample motor dataset online (e.g., speed and current) and use NumPy to load it from a file.' },
                { task: 'Plot motor curve', instruction: 'Use **Matplotlib** to create a simple line plot from two NumPy arrays (e.g., Time vs. Position).' },
                { task: 'Moving average filter', instruction: 'Implement a basic moving average filter function to smooth noisy data points in a NumPy array.' },
                { task: 'CSV handling', instruction: 'Use the **Pandas** library (or standard CSV module) to read a CSV file, inspect the first few rows, and access a column by name.' },
                { task: '(PROJECT) Plot torque–speed curve from CSV', instruction: 'Write a script that reads a CSV file containing torque and speed columns and generates a properly labeled plot using Matplotlib.' }
            ]
        },
        {
            week: 6,
            title: 'Robotics Math with Python',
            goal: 'Build computational thinking.',
            days: [
                { task: 'Transformation matrix', instruction: 'Understand the difference between rotation and translation matrices. Write a function to generate a 2D rotation matrix.' },
                { task: 'Forward kinematics', instruction: 'Write the DH parameters (or basic geometry) for a simple **2-link planar arm**. ' },
                { task: 'Plot 2-link arm', instruction: 'Use Matplotlib to plot the position of the end-effector by calculating it from two joint angles.' },
                { task: 'Trajectory generation', instruction: 'Research linear (straight-line) vs. polynomial (smooth) path planning. Implement a basic linear interpolation between two points.' },
                { task: 'Basic PID logic', instruction: 'Write the core equations for P, I, and D terms. Understand what each term contributes to system control.' },
                { task: 'Bending stress calculation', instruction: 'Practice a simple structural calculation (e.g., bending stress on a beam) to ground the math in reality.' },
                { task: '(PROJECT) 2-link arm XY simulation', instruction: 'Create a script that calculates and plots the end-effector position of your 2-link arm for a range of joint angles.' }
            ]
        },
        {
            week: 7,
            title: 'Arduino + Python',
            goal: 'Hardware–software integration.',
            days: [
                { task: 'Serial communication concepts', instruction: 'Understand **Baud Rate**. Know why it must be the same on both the Arduino and the Python script.' },
                { task: 'Install pyserial', instruction: 'Successfully install the `pyserial` library and identify the correct COM port/device path for your Arduino.' },
                { task: 'Read sensor data', instruction: 'Write an Arduino sketch that continuously prints a sensor value (e.g., from a potentiometer) to the Serial Monitor.' },
                { task: 'Live plot', instruction: 'Use a Python plotting library (like Matplotlib) to read the serial data and plot it in real-time.' },
                { task: 'Send commands', instruction: 'Write a Python script to send a character (e.g., ‘H’ or ‘L’) over serial to the Arduino.' },
                { task: 'Servo control', instruction: 'Write an Arduino sketch to move a servo motor based on a received serial command (e.g., send an angle number).' },
                { task: '(PROJECT) Control servo angle via Python → Arduino', instruction: 'Build a system where a user types an angle into the Python terminal, and the Arduino moves the servo to that angle.' }
            ]
        },
        {
            week: 8,
            title: 'ROS2 Basics',
            goal: 'Understand ROS nodes & communication.',
            days: [
                { task: 'Install ROS2', instruction: 'Complete the official installation guide for your OS (Ubuntu recommended). Run `ros2 run demo_nodes_cpp talker` to verify.' },
                { task: 'Nodes & topics', instruction: 'Draw a diagram of two nodes communicating via a topic. Understand the difference between nodes and executables.' },
                { task: 'Create workspace', instruction: 'Create a new ROS 2 workspace (`ros2_ws`), and understand the significance of the `src` folder and the `install` folder.' },
                { task: 'Publisher', instruction: 'Create a simple Python (or C++) publisher node that publishes a string message (e.g., "Hello ROS") to a custom topic.' },
                { task: 'Subscriber', instruction: 'Create a simple subscriber node that listens to your publisher’s topic and prints the received message to the terminal.' },
                { task: 'Launch files', instruction: 'Write a basic launch file (in Python or XML) to start both your publisher and subscriber nodes simultaneously with a single command.' },
                { task: '(PROJECT) Simple pub–sub system', instruction: 'Demonstrate the publisher and subscriber running from a single launch file, communicating reliably.' }
            ]
        },
        {
            week: 9,
            title: 'URDF Modeling',
            goal: 'Create robot digital twins.',
            days: [
                { task: 'URDF basics', instruction: 'Understand what URDF (Unified Robot Description Format) is. Note that it is only for robot **kinematics** and **visuals**, not dynamics.' },
                { task: 'Links & joints', instruction: 'Define the **Link** (mass/inertia) and **Joint** (connection/motion) tags. Know the difference between **parent** and **child** links.' },
                { task: 'Inertias', instruction: 'Understand why the **inertia** tag is critical for simulation (Gazebo). Use a tool to calculate the inertia matrix for a simple shape (e.g., a box).' },
                { task: 'Joint types', instruction: 'Compare `fixed`, `revolute`, and `prismatic` joints. Choose the correct type for a rotating arm joint.' },
                { task: 'Add gripper', instruction: 'Extend a simple arm URDF by adding a `fixed` joint to attach a simple gripper model.' },
                { task: 'Add visuals/colors', instruction: 'Use the `<material>` tag to apply colors to different links in your URDF.' },
                { task: '(PROJECT) Build 2DOF robotic arm URDF', instruction: 'Create a complete URDF file for a 2-link arm with two revolute joints, including links, joints, and visual materials.' }
            ]
        },
        {
            week: 10,
            title: 'Rviz + TF',
            goal: 'Visualize & move your robot.',
            days: [
                { task: 'TF frames', instruction: 'Understand the **Transform Frame (TF)** concept. Identify the parent frame (e.g., `world`) and the child frame (e.g., `end_effector`).' },
                { task: 'Visualize URDF', instruction: 'Load and display your 2DOF arm URDF in **Rviz**. ' },
                { task: 'Joint states', instruction: 'Understand the role of the `/joint_states` topic, which publishes the current angles of the robot’s joints.' },
                { task: 'Publish angles', instruction: 'Write a simple ROS 2 node that publishes simulated joint angles to the `/joint_states` topic.' },
                { task: 'Move arm', instruction: 'Modify your publisher node to continuously change the joint angles, watching your robot move in Rviz.' },
                { task: 'Debug URDF', instruction: 'Introduce an error (e.g., a missing joint origin) and use the Rviz **TF display** to locate and fix the mistake.' },
                { task: '(PROJECT) Move 2DOF arm in Rviz', instruction: 'Write a single Python script that publishes a sequence of joint angles to make the 2DOF arm move along a simple path.' }
            ]
        },
        {
            week: 11,
            title: 'Gazebo Simulation',
            goal: 'Test robot without hardware.',
            days: [
                { task: 'Load URDF', instruction: 'Install Gazebo and load your URDF into the simulation environment. Note how to convert a URDF to a Gazebo-compatible model (SDF).' },
                { task: 'Add gravity & joints', instruction: 'Understand that Gazebo uses the `<inertial>` tag from your URDF for physics. Add the necessary Gazebo plugins for joint control.' },
                { task: 'Controllers', instruction: 'Learn about `ros2_control` and set up a basic joint position controller for one of your arm joints.' },
                { task: 'Tune PID', instruction: 'Understand how PID gains affect simulation behavior (e.g., overshoot, settling time). Tweak one P-gain to see the effect.' },
                { task: 'Add gripper joint', instruction: 'Model your gripper with a prismatic joint in the URDF and set up a simple controller for it in Gazebo.' },
                { task: 'Pick-and-place planning', instruction: 'Manually move the arm in Gazebo to understand the necessary steps (approach, grasp, lift, move, release).' },
                { task: '(PROJECT) Full pick-and-place simulation', instruction: 'Use a ROS 2 node to send commands to your Gazebo joint controllers to execute a basic pick-and-place task on a simple block.' }
            ]
        },
        {
            week: 12,
            title: 'MoveIt',
            goal: 'Achieve industry-level motion planning.',
            days: [
                { task: 'Install MoveIt', instruction: 'Install the MoveIt 2 package and its necessary dependencies. Run the official setup assistant for a demo robot to see the process.' },
                { task: 'Robot config', instruction: 'Run the **MoveIt Setup Assistant** on your 2DOF URDF. Define the planning group, end-effector, and self-collision avoidance.' },
                { task: 'Plan motion', instruction: 'Use the Rviz Motion Planning plugin to set a start and goal pose for your robot. Generate a successful motion plan.' },
                { task: 'Execute motion', instruction: 'Write a Python MoveIt client script that commands the robot to execute the planned trajectory in the Gazebo simulation.' },
                { task: 'Collision objects', instruction: 'Add a simple object (e.g., a wall) into the MoveIt planning scene. Verify that the planner avoids it.' },
                { task: 'Auto planning', instruction: 'Develop a script that iteratively calls the MoveIt planner and executes the resulting trajectory.' },
                { task: '(PROJECT) Pick & place using MoveIt', instruction: 'Create a fully automated script that uses the MoveIt planner to pick up a simulated object and place it at a different goal location.' }
            ]
        }
    ];

    const checklistContainer = document.getElementById('checklist-container');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressPercentageSpan = document.getElementById('progress-percentage');
    
    // Total number of tasks for percentage calculation
    const TOTAL_TASKS = rosPlan.reduce((count, week) => count + week.days.length, 0);

    // --- 2. Load Saved State from Local Storage ---
    const savedChecks = JSON.parse(localStorage.getItem('rosChecklist')) || {};
    const savedHabits = JSON.parse(localStorage.getItem('rosHabits')) || {};

    let completedTasks = 0;

    // --- 3. Progress Bar Update Function ---
    const updateProgress = () => {
        completedTasks = Object.values(savedChecks).filter(isCompleted => isCompleted).length;
        
        const percentage = (completedTasks / TOTAL_TASKS) * 100;
        const roundedPercentage = percentage.toFixed(1);

        progressBarFill.style.width = `${roundedPercentage}%`;
        progressPercentageSpan.textContent = `${roundedPercentage}%`;
    };

    // --- 4. Habit Checkbox Setup ---
    document.querySelectorAll('#daily-habits input[type="checkbox"]').forEach(checkbox => {
        if (savedHabits[checkbox.id]) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', (e) => {
            savedHabits[e.target.id] = e.target.checked;
            localStorage.setItem('rosHabits', JSON.stringify(savedHabits));
        });
    });

    // --- 5. Generate Weekly Checklist UI ---
    rosPlan.forEach(weekData => {
        const weekBlock = document.createElement('div');
        weekBlock.className = 'week-block';

        const weekHeader = document.createElement('div');
        weekHeader.className = 'week-header';
        weekHeader.innerHTML = `
            <span>📌 WEEK ${weekData.week} — ${weekData.title}</span>
            <span class="week-goal">Goal: ${weekData.goal}</span>
        `;
        weekHeader.addEventListener('click', () => {
            dayList.classList.toggle('active');
        });

        const dayList = document.createElement('ul');
        dayList.className = 'day-list';
        
        // Populate Days/Tasks
        weekData.days.forEach((dayData, index) => {
            const taskId = `week-${weekData.week}-day-${index + 1}`;
            const isProject = dayData.task.includes('(PROJECT)');
            const cleanTask = dayData.task.replace('(PROJECT) ', '');
            
            const listItem = document.createElement('li');
            if (isProject) {
                listItem.classList.add('project-task');
            }

            listItem.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" id="${taskId}">
                    <label for="${taskId}">${cleanTask}</label>
                </div>
                <p class="learning-instructions">💡 **How to Learn:** ${dayData.instruction}</p>
            `;
            
            const checkbox = listItem.querySelector(`#${taskId}`);

            // Load saved state for the task
            if (savedChecks[taskId]) {
                checkbox.checked = true;
            }

            // Add event listener to save progress and update bar
            checkbox.addEventListener('change', (e) => {
                savedChecks[taskId] = e.target.checked;
                localStorage.setItem('rosChecklist', JSON.stringify(savedChecks));
                updateProgress(); // Recalculate and update the bar
            });

            dayList.appendChild(listItem);
        });

        weekBlock.appendChild(weekHeader);
        weekBlock.appendChild(dayList);
        checklistContainer.appendChild(weekBlock);
    });
    
    // --- 6. Initial Progress Load ---
    updateProgress();
});