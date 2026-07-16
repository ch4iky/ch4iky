// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and panels
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Function to switch tabs
    function switchTab(tabId) {
        // Remove active class from all tabs and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to selected tab and panel
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedPanel = document.getElementById(tabId);
        
        if (selectedButton && selectedPanel) {
            selectedButton.classList.add('active');
            selectedPanel.classList.add('active');
        }
    }

    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Optional: Keyboard navigation support
    tabButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Optional: Make tabs accessible with ARIA attributes
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        const panelId = button.getAttribute('data-tab');
        button.setAttribute('aria-controls', panelId);
    });

    tabPanels.forEach(panel => {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', panel.id);
    });

    // Update ARIA attributes when switching tabs
    function updateAriaAttributes(tabId) {
        tabButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-tab') === tabId;
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    // Override switchTab to include ARIA updates
    const originalSwitchTab = switchTab;
    switchTab = function(tabId) {
        originalSwitchTab(tabId);
        updateAriaAttributes(tabId);
    };

    // Make switchTab globally accessible (for inline onclick if needed)
    window.switchTab = switchTab;
});