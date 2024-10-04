// Function to show the taskbar when the button is clicked
function toggleTaskbar() {
    var taskbar = document.getElementById('taskbar');
    taskbar.style.display = 'block'; // Show taskbar
}

// Function to hide the taskbar
function hideTaskbar() {
    var taskbar = document.getElementById('taskbar');
    taskbar.style.display = 'none'; // Hide taskbar
}

// Event listener to hide the taskbar when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
    var taskbar = document.getElementById('taskbar');
    var button = document.querySelector('button');

    // Show taskbar when clicking the button
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling to the document
        taskbar.style.display = 'block'; // Show taskbar
    });

    // Hide taskbar when clicking anywhere on the screen (except the taskbar and button)
    document.addEventListener('click', function(event) {
        if (!taskbar.contains(event.target) && !button.contains(event.target)) {
            hideTaskbar(); // Hide the taskbar if clicked outside
        }
    });

    // Ensure the taskbar stays visible when hovering over it
    taskbar.addEventListener('mouseover', function() {
        taskbar.style.display = 'block'; // Keep taskbar visible
    });
});
